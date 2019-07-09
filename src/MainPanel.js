import React, {Component} from "react";

export default class MainPanel extends Component {

    render() {
        const row = this.props.row;

        const keyValuePairs = this.props.keys
            .map(k => {
                if (k.display) {
                    return (
                        <React.Fragment key={k.fieldname}>
                            <dt>{k.fieldname}</dt>
                            <dd>{row[k.fieldname]}</dd>
                        </React.Fragment>
                    );
                }
                return null;
            })
            .filter(obj => obj !== null);

        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <div className="page-header text-center">

                    <div id="main-form-bar">
                        <div className="form-inline pull-left">
                            <div className="panel panel-default">
                                <div className="panel-body">Rows: {this.props.dataLength}</div>
                                <div className="panel-body">Current row: {this.props.currentIndex}</div>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div className="main-panel-form-group-1">
                                <button className="btn btn-default" onClick={this.props.handlePreviousClick}>Previous</button>
                                <button className="btn btn-default" onClick={this.props.handleNextClick}>Next</button>
                                <input className="form-control text-center" type="text" value={this.props.inputIndex} onChange={this.props.handleTextInputChange} onKeyPress={this.props.handleOnSubmit}/>
                            </div>
                            <div className="main-panel-form-group-2 input-group">
                                <input className="form-control text-center" type="text" placeholder="Search ..."/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" onClick={this.props.handleNextClick}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="dl-horizontal">
                    {keyValuePairs}
                </div>

            </div>
        );
    }
}