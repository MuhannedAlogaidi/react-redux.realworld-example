import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand">{this.props.appName.toLowerCase()}</a>
        </div>
      </nav>
    );
  }
}

export default Header;
