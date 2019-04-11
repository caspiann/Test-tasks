import React, { Component } from "react";

const caretIconStyles = {
  caretOpen: "fa fa-caret-down",
  caretClosed: "fa fa-caret-right"
};
const folderIconStyles = {
  folderOpen: "fa fa-folder-open-o",
  folderClosed: "fa fa-folder-o"
};

export default class Arrow extends Component {
  render() {
    const { caretOpen, caretClosed } = caretIconStyles;
    const { folderOpen, folderClosed } = folderIconStyles;
    const { onClick, arrowClassName, isCollapsed } = this.props;
    return (
      <span className={arrowClassName} onClick={onClick}>
        <i
          className={isCollapsed ? caretClosed : caretOpen}
          aria-hidden="true"
        />
        <i
          className={isCollapsed ? folderClosed : folderOpen}
          aria-hidden="true"
        />
      </span>
    );
  }
}
