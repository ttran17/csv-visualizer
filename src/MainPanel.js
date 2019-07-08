import React, {Component} from "react";

export default class MainPanel extends Component {

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <div className="page-header scroll-buttons text-center">

                    <div className="form-inline">
                        <button className="btn btn-default" onClick={this.props.handlePreviousClick}>Previous</button>
                        <button className="btn btn-default" onClick={this.props.handleNextClick}>Next</button>
                        <input className="form-control text-center" type="text" value={this.props.inputIndex} onChange={this.props.handleTextInputChange} onKeyPress={this.props.handleOnSubmit}/>
                        <button className="btn btn-default"> {this.props.currentIndex} out of {this.props.dataLength}</button>
                    </div>

                </div>

                <div className="dl-horizontal">
                    {this.props.keyValuePairs}
                </div>

            </div>
        );
    }
}