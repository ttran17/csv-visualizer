import React, {Component} from "react";

export default class SettingsDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownToggle: false
        }
    }

    handleClickOutside = () => {
        console.log("blurring");
        this.setState(state => {
            return {
                dropdownToggle: false
            }
        })
    };

    handleDropdownToggle = () => {
        this.setState(state => {
            return {
                dropdownToggle: !state.dropdownToggle
            }
        })
    };

    render() {
        const fileSaveSettingsMenuToggle = this.state.dropdownToggle ? "file-save-settings-show-menu" : "file-save-settings-hide-menu";

        const options = this.props.saveOptions.map(opt => {
            return (
                <li key={opt.key}>
                    <div className="checkbox my-checkbox">
                        <label>
                            <input type="radio" checked={opt.val} onChange={ e => {this.props.handleFileSaveOptions(e,opt)} }/>
                            <span className="file-save-settings-li">{opt.text}</span>
                        </label>
                    </div>
                </li>
            )
        });

        return (
            <React.Fragment>
                <label className="btn btn-default dropdown-toggle" onClick={this.handleDropdownToggle}>
                    <span className="glyphicon glyphicon-cog"></span>
                </label>
                <ul id={fileSaveSettingsMenuToggle} className="dropdown-menu">
                    {options}
                </ul>
            </React.Fragment>
        )
    }
}