// This component is responsible for choosing a player on the board

import React from "react";

class Player extends React.Component {
  // toHandleForm
  handleForm(e) {
    e.preventDefault();
    // console.log(`event target => `, e.target.player.value);
    // console.log("props => ", this.props.player(e.target.player.value));
    this.props.player(e.target.player.value);
  }

  render() {
    return (
      <form onSubmit={e => this.handleForm(e)}>
        <label className="player">
          <input type="radio" name="player" value="X" /> PLAYER X
        </label>
        <label>
          <input type="radio" name="player" value="O" /> PLAYER O
        </label>
        <br />
        <input className="submit" type="submit" value="start" />
      </form>
    );
  }
}

export default Player;
