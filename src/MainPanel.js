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


        const searchCSS = this.props.showingSearch ? "showing-search-results-info" : "hiding-search-results-info";
        const searchExceptionCSS = this.props.searchException ? "search-exception" : "no-search-exception"+"-"+searchCSS;


        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <div className="page-header text-center">
                    <div id="main-form-bar">
                        <div className="form-inline pull-left">
                            <div className="panel panel-default">
                                <div className="panel-body">Rows: {this.props.dataLengthOG}</div>
                                <div className="panel-body">Absolute index: {this.props.absoluteIndex}</div>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div className="main-panel-form-group-1">
                                <button className="btn btn-default" onClick={this.props.handlePreviousClick}>Previous</button>
                                <button className="btn btn-default" onClick={this.props.handleNextClick}>Next</button>
                                <input id={searchCSS} className="form-control text-center" type="text" value={this.props.inputIndex} onChange={this.props.handleTextInputChange} onKeyPress={this.props.handleOnSubmit}/>
                            </div>
                            <div className="main-panel-form-group-2 input-group">
                                <input id={searchExceptionCSS} className={"form-control text-center "} type="text" value={this.props.inputSearch} onChange={this.props.handleSearchInputChange} onKeyPress={this.props.handleSearchRequest} placeholder="Search ..."/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default">
                                        <span className="glyphicon glyphicon-question-sign"></span>
                                    </button>
                                    <button className="btn btn-default" onClick={this.props.handleSearchInputClear}>Clear</button>
                                </div>
                            </div>
                        </div>

                        <div className={"form-inline pull-right " + searchCSS}>
                            <div className="panel panel-default panel-search-results-info">
                                <div className="panel-body">Search results: {this.props.displayIndex} of {this.props.dataLength}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dl-horizontal">
                    {/*<dt>key</dt><dd> Hello <span className="search-highlight"> World </span> </dd>*/}
                    {keyValuePairs}
                </div>
            </div>


        );
    }
}