import React, {Component} from "react";

export default class Navbar extends Component {

    render() {
        const visualizerIcon = this.props.visualizer ? "glyphicon glyphicon-th" : "glyphicon glyphicon-th-list";

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {!this.props.visualizer && <a className="navbar-brand" href="#">Your Advertisement Here!</a>}
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
                                Browse <input id="navbar-input-file" type="file" accept=".csv" onChange={this.props.handleOnFileChange}/>
                            </label>
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