import React, {Component} from "react";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Your Advertisement Here!</a>
                    </div>
                    <div id="navbar">
                        <div className="navbar-form navbar-right">
                            {/*<input type="text" className="form-control" placeholder="Search..."/>*/}
                            <label className="btn btn-default btn-file">
                                Browse <input id="navbar-input-file" type="file" accept=".csv" onChange={this.props.handleOnFileChange}/>
                            </label>
                        </div>
                        <p className="navbar-text navbar-right">{this.props.currentFilename}</p>
                    </div>
                </div>
            </nav>
        );
    }
}