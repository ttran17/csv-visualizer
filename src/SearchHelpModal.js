import React, {Component} from "react";
import Modal from "react-modal";

export default class SearchHelpModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.modalCloseButton = React.createRef();
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    focusModalCloseButton = () => {
        this.modalCloseButton.current.focus();
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-default" onClick={this.openModal}>
                    <span className="glyphicon glyphicon-question-sign"></span>
                </button>
                <Modal className="modal-dialog"
                       isOpen={this.state.modalIsOpen}
                       onAfterOpen={this.focusModalCloseButton}
                       onRequestClose={this.closeModal}
                       shouldReturnFocusAfterClose={false}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center">Item View Search Functionality</h4>
                        </div>
                        <div className="modal-body">
                            <span>
                                Unlike the "search" feature in the table view which searches by columns,
                                this search feature attempts to find a match across all columns. For large datasets,
                                queries may be slow as the search library (flex-search) needs to be an index
                                before it can start searching.
                            </span>
                            <p></p>
                            <p>
                                Notes:
                                <ul>
                                    <li>User must press "enter" while in the search box to perform a search</li>
                                    <li>Successful searches will highlight search box in cornflower blue</li>
                                    <li>Unsuccessful searches will highlight the search box in orange</li>
                                </ul>
                            </p>
                            <p></p>
                            <h5>Caveat emptor:</h5>
                            An orange search box denotes an error. The app will be in an inconsistent state when
                            you see the orange search box. While UI elements will continue to work and data can
                            still be perused results may be confusing. CLEAR the search box or FIX the search string
                            and resubmit before resuming!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" ref={this.modalCloseButton} onClick={this.closeModal} onKeyPress={this.closeModal}>Close</button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}