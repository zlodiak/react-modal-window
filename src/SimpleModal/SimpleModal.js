import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./SimpleModalStyles";

class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  render() {
    const { onCloseRequest, children, classes } = this.props;

    return (
      <div className={classes.modalOverlay}>
        <div className={classes.modal} id="modal">
          <div className={classes.modalContent}>{children}</div>
        </div>

        <button
          type="button"
          className={classes.closeButton}
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(SimpleModal);
