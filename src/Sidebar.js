import React, {Component} from "react";

export default class Sidebar extends Component {

    render() {
        const displayedKeys = this.props.keys.map(k => {
            return (
                <li key={k.fieldname}>
                    <div className="checkbox">
                        <label>
                            <input name={k.fieldname} type="checkbox" checked={k.display} onChange={ e => {this.props.onChangeShowField(e,k)} }/>
                            {k.fieldname}
                        </label>
                    </div>
                </li>
            );
        });

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
                        {displayedKeys}
                    </ul>
                </div>
            </div>
        );
    }
}