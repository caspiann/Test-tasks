import React, { Component } from "react";
import ArrowParent from "./ArrowParentNode";
import ArrowChild from "./ArrowChildNode";

export default class TreeNode extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { data } = this.props;
    const { isOpen } = this.state;
    let subtree = null;

    if (data.children) {
      subtree = data.children.map(function(child) {
        return <TreeNode key={child.id} data={child} />;
      });
    }

    let arrowClassName = "tree-node-arrow";
    let containerClassName = "tree-node-children";

    if (isOpen) {
      arrowClassName += " tree-node-arrow-collapsed";
      containerClassName += " tree-node-children-collapsed";
    }

    return subtree ? (
      <div className="tree-node">
        <div>
          <ArrowParent
            arrowClassName={arrowClassName}
            onClick={this.handleClick}
            isCollapsed={this.state.isOpen}
          />
          <a href="/" id={data.id}>
            {data.name}
          </a>
        </div>
        <div className={containerClassName}>{subtree}</div>
      </div>
    ) : (
      <div className="tree-node-leaf">
        <ArrowChild
          arrowClassName={arrowClassName}
          onClick={this.handleClick}
        />
        <a href="/" id={data.id}>
          {data.name}
        </a>
      </div>
    );
  }
}
