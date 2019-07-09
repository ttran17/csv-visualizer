import React, {Component} from "react";

import {csvParse} from "d3-dsv";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilename: "Selected File",
            currentIndex: -1,
            inputIndex: 0,
            showAll: false,
            keys: [],
            data: []
        }
    }

    handleOnFileChange = (e) => {
        const filename = e.target.files[0].name;
        this.setState({
            currentFilename: filename
        });

        let reader = new FileReader();

        reader.onload = (e) => {
            const data = csvParse(e.target.result);
            const keys = Object.keys(data[0]).map(k => {
                return {
                    fieldname: k,
                    display: true
                }
            });
            this.setState({
                currentIndex: 0,
                inputIndex: 1,
                showAll: true,
                keys: keys,
                data: data
            });
            console.log(Object.keys(data[0]));
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
            if (state.currentIndex > 0) {
                return {
                    currentIndex: state.currentIndex - 1,
                    inputIndex: state.currentIndex
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
            if (state.currentIndex >= 0 && state.currentIndex < state.data.length) {
                return {
                    currentIndex: state.currentIndex + 1,
                    inputIndex: state.currentIndex + 2
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
                        currentIndex: index - 1
                    }
                }
                alert("input " + state.inputIndex + " is invalid");
                return null;
            });
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
                               inputIndex={this.state.inputIndex}
                               handleTextInputChange={this.handleTextInputChange}
                               handleOnSubmit={this.handleOnSubmit}
                               currentIndex={this.state.currentIndex+1}
                               dataLength={this.state.data.length === 0 ? 0 : this.state.data.length+1}
                               row={this.state.data[this.state.currentIndex]}
                               keys={this.state.keys}
                    />
                </div>
            </React.Fragment>
        );
    }
}