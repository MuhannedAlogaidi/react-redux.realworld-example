import React, { Component } from "react";

import { connect } from "react-redux";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appName: state.appName
  };
};
export default connect(mapStateToProps)(App);
