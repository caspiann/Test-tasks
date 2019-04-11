import React, { Component } from "react";

export default class Arrow extends Component {
  render() {
    const { onClick, arrowClassName } = this.props;
    return (
      <span className={arrowClassName} onClick={onClick}>
        <i class="fa fa-folder-o" aria-hidden="true" />
      </span>
    );
  }
}
