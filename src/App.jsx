import React from "react";
import ReactDOM from "react-dom";
import Player from "./components/Player.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
      moves: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let checkBoard = this.state.board;
      if (
        // we need this first condition otherwise all null values will read as
        // meeting the condition and an alert will popup
        !this.state.winner &&
        checkBoard[a] &&
        checkBoard[a] === checkBoard[b] &&
        checkBoard[a] === checkBoard[c]
      ) {
        this.setState({
          winner: this.state.player
        });
        alert(`Player ${this.state.player} wins`);
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      console.log(`this state baord => `, this.state.board);
      console.log(index);
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "x" ? "o" : "x"
        });
      }
      // let newPlayer = this.state.player === "x" ? "o" : "x";

      this.checkWinner();
    }

    // console.log(e);
    // console.log(e.target);
  }

  setPlayer(player) {
    console.log("player => ", player);
    this.setState({ player: player });
  }

  renderBoxes() {
    return this.state.board.map((box, index) => {
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>;
    });
  }

  render() {
    let status = this.state.player ? (
      `Player ${this.state.player}'s turn`
    ) : (
      <Player player={e => this.setPlayer(e)} />
    );

    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>

        <div className="board" id="center">
          {this.renderBoxes()}
        </div>
        <div className="player1" id="right">
          {status}
        </div>
      </div>
    );
  }
}

export default App;
