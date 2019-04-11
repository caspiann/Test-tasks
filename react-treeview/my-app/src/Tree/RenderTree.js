import React, { Component } from "react";
import "./Tree.css";
import TreeNode from "./Tree";
import data from "./data";
import "./Tree.css";

export default class extends Component {
  render() {
    let tree = data.map(child => {
      return <TreeNode key={child.id} data={child} />;
    });

    return (
      <div className="container">
        <header>
          <div className="container_name">Folders</div>
          <div className="container_arrow">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </div>
        </header>
        <div className="tree-view">{tree}</div>
      </div>
    );
  }
}
