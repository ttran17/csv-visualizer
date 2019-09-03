import React, {Component} from "react";
import ContentEditable from "react-contenteditable";

export default class EditableDD extends Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
    };

    render = () => {
        const uuid = this.props.uuid;
        const fieldname = this.props.fieldname;

        return <ContentEditable
            innerRef={this.contentEditable}
            html={this.props.html} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={e => {this.props.handleItemChange(e, uuid, fieldname)}} // handle innerHTML change
            tagName='dd' // Use a custom HTML tag (uses a div by default)
        />
    };
}