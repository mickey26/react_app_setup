import React from "react";
import { connect } from "react-redux";
import { landingAct } from "../actions/LandingActions";

class LandingPage extends React.Component {
  handleChange() {
    this.props.landingAct();
  }
  render() {
    return (
      <div>
        <h2>LandingPage</h2>
        <button onClick={() => this.handleChange()}>Change state</button>
      </div>
    );
  }
}

const mapStateToProps = ({ LandingReducer }) => {
  const { isLoading } = LandingReducer;
  return {
    isLoading,
  };
};

export default connect(mapStateToProps, { landingAct })(LandingPage);
