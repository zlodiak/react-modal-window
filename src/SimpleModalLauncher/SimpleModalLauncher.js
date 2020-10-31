import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./SimpleModalLauncherStyles";
import SimpleModal from "../SimpleModal/SimpleModal";

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className={classes.modalButton}
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal && (
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </SimpleModal>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(SimpleModalLauncher);
