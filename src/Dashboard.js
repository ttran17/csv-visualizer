import React, {Component} from "react";

import {csvParse} from "d3-dsv";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ItemView from "./ItemView";
import TableView from "./TableView";

import FlexSearch from "flexsearch";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilename: "Selected File",
            fileSize: 0,
            absoluteIndex: 0,
            actualIndex: -1,
            displayIndex: 0,
            inputIndex: 0,
            showAll: false,
            inputSearch: "",
            keys: [],
            data: [],
            dataLengthOG: 0,
            dataOG: [],
            searchException: false,
            showingSearch: false,
            visualizer: false
        };

        this.uuid = "fsuuid"; // TODO: someday make absolutely certain this is unique uuid ...
        this.cachedIndex = null;
    }

    handleOnFileChange = (e) => {
        if (e.target.files.length === 0) {
            // handle "cancel" option
            return;
        }
        const file = e.target.files[0];
        const filename = file.name;
        const fileSize = file.size/1000000;

        let reader = new FileReader();

        reader.onload = (e) => {
            const rawdata = csvParse(e.target.result);
            const keys = Object.keys(rawdata[0]).map(k => {
                return {
                    fieldname: k,
                    display: true,
                    search: false
                }
            });
            const data = rawdata.map((row,i) => Object.assign({}, {[this.uuid]: i+1}, row));
            this.setState({
                currentFilename: filename,
                fileSize: fileSize,
                absoluteIndex: 1,
                actualIndex: 0,
                displayIndex: 1,
                inputIndex: 1,
                showAll: true,
                keys: keys,
                data: data,
                dataLengthOG: data.length,
                dataOG: data.map(d => d)
            });
            console.log(data[0]);
        };

        console.log(filename + " is: " + fileSize + " MB");
        reader.readAsText(file);
    };

    onChangeShowAll = (event) => {
        const showAll = event.target.checked;
        const keys = this.state.keys.map(k => {
            return {
                fieldname: k.fieldname,
                display: showAll,
                search: k.search
            }
        });
        this.setState({
            showAll: showAll,
            keys: keys
        });
    };

    onChangeShowField = (event, key) => {
        const keys = this.state.keys.map(k => {
            if (k.fieldname === key.fieldname) {
                return {
                    fieldname: key.fieldname,
                    display: event.target.checked,
                    search: key.search
                }
            } else {
                return k;
            }
        });
        let showAll = true;
        keys.forEach(k => {
           showAll = showAll && k.display;
        });
        this.setState({
            showAll: showAll,
            keys: keys
        })
    };

    handlePreviousClick = (event) => {
        if (!(event.type === 'click' || event.key === "Enter")) {
            return;
        }
        this.setState(state => {
            if (state.actualIndex > 0) {
                const nextIndex = state.actualIndex - 1;
                return {
                    absoluteIndex: state.data[nextIndex][this.uuid],
                    actualIndex: nextIndex,
                    displayIndex: nextIndex + 1,
                    inputIndex: nextIndex + 1
                }
            } else {
                return  null;
            }
        });
    };

    handleNextClick = (event) => {
        if (!(event.type === 'click' || event.key === "Enter")) {
            return;
        }
        this.setState(state => {
            if (state.actualIndex >= 0 && state.actualIndex < state.data.length-1) {
                const nextIndex = state.actualIndex + 1;
                return {
                    absoluteIndex: state.data[nextIndex][this.uuid],
                    actualIndex: nextIndex,
                    displayIndex: nextIndex + 1,
                    inputIndex: nextIndex + 1
                }
            } else {
                return  null;
            }
        });
    };

    handleTextInputChange = (event) => {
        const index = event.target.value;
        this.setState({
           inputIndex: index
        });
    };

    handleOnSubmit = (event) => {
        if (event.key === "Enter") {
            this.setState(state => {
                const index = +state.inputIndex;
                if (Number.isInteger(index) && index > 0 && index <= state.data.length) {
                    return {
                        absoluteIndex: state.data[index-1][this.uuid],
                        actualIndex: index-1,
                        displayIndex: index
                    }
                }
                alert("input " + state.inputIndex + " is invalid");
                return null;
            });
        }
    };

    handleSearchInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            inputSearch: value
        });
    };

    handleSearchInputClear = () => {
        this.setState(state => {
            return {
                absoluteIndex: 1,
                actualIndex: 0,
                displayIndex: 1,
                inputIndex: 1,
                inputSearch: "",
                data: state.dataOG.map(d => d),
                searchException: false,
                showingSearch: false
            }
        });
    };

    handleSearchException = () => {
        this.setState({
            searchException: true
        });
    };

    handleSearchRequest = (event) => {
        if (event.key === "Enter") {
            if (this.state.inputSearch.length === 0) {
                this.handleSearchInputClear();
                return;
            }

            if (this.cachedIndex === null) {
                const docs = this.state.dataOG.map(d => d);
                const keys = this.state.keys.map(k => k.fieldname);
                const uuid = this.uuid;
                this.cachedIndex = new FlexSearch({
                    doc: {
                        id: uuid,
                        field: keys
                    }
                });
                console.log("building flexsearch index");
                this.cachedIndex.add(docs);
                console.log("done building flexsearch index");
            }

            const searchKeys = this.state.keys.filter(k => k.display).map(k => k.fieldname);
            if (searchKeys.length === 0) {
                this.handleSearchException();
                alert("Cannot search without choosing at least one field to display");
                return;
            }
            const results = this.cachedIndex.search({
                query: this.state.inputSearch,
                field: searchKeys
            });
            if (results.length === 0) {
                this.handleSearchException();
                alert("No matches found: " + this.state.inputSearch);
                return;
            }
            this.setState({
                absoluteIndex: results[0][this.uuid],
                actualIndex: 0,
                displayIndex: 1,
                inputIndex: 1,
                data: results.map(r => r),
                searchException: false,
                showingSearch: true
            });
            // console.log(results[0]);
        }
    };

    handleCsvVisualizerToggle = () => {
        this.setState(state => {
            return {
                visualizer: !state.visualizer
            }
        });
    };

    render() {
        const displayCSS = this.state.visualizer ? "hide-item-view" : "hide-react-table";

        return (
            <React.Fragment>
                <Navbar currentFilename={this.state.currentFilename}
                        handleOnFileChange={this.handleOnFileChange}
                        visualizer={this.state.visualizer}
                        handleCsvVisualizerToggle={this.handleCsvVisualizerToggle}
                />

                <div className="row">
                    <Sidebar keys={this.state.keys}
                             showAll={this.state.showAll}
                             onChangeShowField={this.onChangeShowField}
                             onChangeShowAll={this.onChangeShowAll}
                    />

                    {!this.state.visualizer &&
                        <ItemView handlePreviousClick={this.handlePreviousClick}
                                  handleNextClick={this.handleNextClick}
                                  absoluteIndex={this.state.absoluteIndex}
                                  displayIndex={this.state.displayIndex}
                                  inputIndex={this.state.inputIndex}
                                  handleTextInputChange={this.handleTextInputChange}
                                  handleOnSubmit={this.handleOnSubmit}
                                  dataLengthOG={this.state.dataLengthOG}
                                  dataLength={this.state.data.length}
                                  row={this.state.data[this.state.actualIndex]}
                                  keys={this.state.keys}
                                  inputSearch={this.state.inputSearch}
                                  handleSearchInputChange={this.handleSearchInputChange}
                                  handleSearchRequest={this.handleSearchRequest}
                                  handleSearchInputClear={this.handleSearchInputClear}
                                  searchException={this.state.searchException}
                                  showingSearch={this.state.showingSearch}
                        />
                    }

                    {this.state.visualizer &&
                        <TableView
                            data={this.state.data}
                            keys={this.state.keys}
                        />
                    }

                </div>
            </React.Fragment>
        );
    }
}