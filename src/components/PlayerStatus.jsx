import React from "react";
import Player from "./Player.jsx";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  handleSetPlayer(e) {
    this.props.setPlayer(e);
    console.log("status, looking at props => ", this.props);
  }

  render() {
    return this.props.player ? (
      `Player ${this.props.player}'s turn`
    ) : (
      <Player player={e => this.handleSetPlayer(e)} />
    );
  }
}

export default Status;
