import React, {Component} from "react";
import SettingsDropdown from "./SettingsDropdown";

export default class Navbar extends Component {

    render() {
        const visualizerIcon = this.props.visualizer ? "glyphicon glyphicon-th" : "glyphicon glyphicon-th-list";

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <img id="react-framework" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                                 />
                        </a>
                        {!this.props.visualizer &&
                        <a className="navbar-brand" href="#">Your Advertisement Here!</a>}
                        {this.props.visualizer &&
                            <a href="https://github.com/react-tools/react-table" target="_blank">
                                <img
                                    src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
                                    style={{ width: `150px`, margin: ".5em auto .3em", "background-color": "white" }}
                                />
                            </a>
                        }
                    </div>
                    <div id="navbar">
                        <div className="navbar-form navbar-right">
                            <label className="btn btn-default btn-file">
                                <span className="glyphicon glyphicon-file file-browsing-icon"></span>
                                Browse <input id="navbar-input-file" type="file" accept=".csv, .json" onChange={this.props.handleOnFileChange}/>
                            </label>
                            <div className="btn-group">
                                <label className="btn btn-default btn-file" onClick={this.props.handleOnFileSave}>
                                    <span className="glyphicon glyphicon-save-file file-save-icon"></span>
                                    Save
                                </label>
                                <SettingsDropdown saveOptions={this.props.saveOptions} handleFileSaveOptions={this.props.handleFileSaveOptions}/>
                            </div>
                            <button className="btn btn-default csv-visualizer-toggle" onClick={this.props.handleCsvVisualizerToggle}>
                                <span className={visualizerIcon}></span>
                            </button>
                        </div>
                        <p className="navbar-text navbar-right">{this.props.currentFilename}</p>
                    </div>
                </div>
            </nav>
        );
    }
}