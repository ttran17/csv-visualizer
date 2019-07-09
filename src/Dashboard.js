import React, {Component} from "react";

import {csvParse} from "d3-dsv";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

import CachedIndex from "./CachedIndex";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilename: "Selected File",
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
            showingSearch: false
        };

        this.cachedIndex = null;
        this.uuid = CachedIndex.getDefaultUuidKey(); // TODO: someday make absolutely certain this is unique uuid ...
    }

    handleOnFileChange = (e) => {
        const filename = e.target.files[0].name;
        this.setState({
            currentFilename: filename
        });

        let reader = new FileReader();

        reader.onload = (e) => {
            const rawdata = csvParse(e.target.result);
            const keys = Object.keys(rawdata[0]).map(k => {
                return {
                    fieldname: k,
                    display: true
                }
            });
            const data = rawdata.map((row,i) => Object.assign({}, {[this.uuid]: i}, row));
            this.setState({
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
            this.cachedIndex = new CachedIndex();
            console.log(data[0]);
        };

        reader.readAsText(e.target.files[0]);
    };

    onChangeShowAll = (event) => {
        const showAll = event.target.checked;
        const keys = this.state.keys.map(k => {
            return {
                fieldname: k.fieldname,
                display: showAll
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
                    display: event.target.checked
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

    handlePreviousClick = (e) => {
        if (e.detail === 0) {
            // https://github.com/facebook/react/issues/3907
            return;
        }
        this.setState(state => {
            if (state.actualIndex > 0) {
                const nextIndex = state.actualIndex - 1;
                return {
                    absoluteIndex: state.data[nextIndex][this.uuid]+1,
                    actualIndex: nextIndex,
                    displayIndex: nextIndex + 1,
                    inputIndex: nextIndex + 1
                }
            } else {
                return  null;
            }
        });
    };

    handleNextClick = (e) => {
        if (e.detail === 0) {
            // https://github.com/facebook/react/issues/3907
            return;
        }
        this.setState(state => {
            if (state.actualIndex >= 0 && state.actualIndex < state.data.length-1) {
                const nextIndex = state.actualIndex + 1;
                return {
                    absoluteIndex: state.data[nextIndex][this.uuid]+1,
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
                        absoluteIndex: state.data[index-1][this.uuid]+1,
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
                data: state.dataOG.map(d => d),
                showingSearch: false
            }
        });
    };

    handleSearchRequest = (event) => {
        if (event.key === "Enter") {
            if (this.state.inputSearch.length == 0) {
                    this.handleSearchInputClear();
                return;
            }

            const searchKeys = this.state.keys.map(k => k.fieldname);
            const results = this.cachedIndex.search(this.state.data, searchKeys, this.state.inputSearch);
            if (results.length === 0) {
                alert("No matches found: " + this.state.inputSearch);
                return;
            }
            this.setState({
                absoluteIndex: results[0][this.uuid]+1,
                actualIndex: 0,
                displayIndex: 1,
                inputIndex: 1,
                data: results.map(r => r),
                showingSearch: true
            })
        }
    };

    render() {
        return (
            <React.Fragment>
                <Navbar currentFilename={this.state.currentFilename} handleOnFileChange={this.handleOnFileChange} />

                <div className="row">
                    <Sidebar showAll={this.state.showAll} keys={this.state.keys} onChangeShowField={this.onChangeShowField} onChangeShowAll={this.onChangeShowAll}/>

                    <MainPanel handlePreviousClick={this.handlePreviousClick}
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
                               showingSearch={this.state.showingSearch}

                    />
                </div>
            </React.Fragment>
        );
    }
}