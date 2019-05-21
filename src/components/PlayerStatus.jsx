import React from "react";
import Player from "./Player.jsx";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nothing needs to go here, but this state needs to stay
    };
  }

  handleSetPlayer(e) {
    this.props.setPlayer(e);
    console.log("status, looking at props => ", this.props);
  }

  renderWinner() {
    if (this.props.winner) {
      return <h1>The winner is player {this.props.winner} </h1>;
    } else {
      return this.props.player ? (
        `Player ${this.props.player}'s turn`
      ) : (
        <Player player={e => this.handleSetPlayer(e)} />
      );
    }
  }

  render() {
    return <span>{this.renderWinner()}</span>;
  }
}

export default Status;
