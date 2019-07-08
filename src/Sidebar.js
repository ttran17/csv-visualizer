import React, {Component} from "react";

export default class Sidebar extends Component {

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="page-header">
                    <div className="checkbox">
                        <label>
                            <input name="showAll" type="checkbox" checked={this.props.showAll} onChange={this.props.onChangeShowAll}/>
                            Show All
                        </label>
                    </div>
                </div>

                <div className="page-body">
                    <ul className="nav nav-sidebar">
                        {this.props.displayedKeys}
                    </ul>
                </div>
            </div>
        );
    }
}