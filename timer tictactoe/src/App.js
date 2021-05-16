import React from "react";
import Board from "./components/board.js";
import InputDemoComponent from "./components/InputDemoComponent";
import Timer from "./components/timer";

let moveData = [];
let stop=false;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName1: "O",
      playerName2: "X",
    flag:false,
      current: "O",
      //we have to store the previous values
      cells: [null, null, null, null, null, null, null, null, null],
    playerTurn:true,
    reset:false
    };
  }
// renderIn(){
//   return(
//   <div className='App'>
//     <timer />
//   </div>
//   )
// }
  handleCellClick = (id) => {
    let currentValue = this.state.cells[id];
    //if there is a value then return
    if (this.calculateWinner(this.state.cells) || currentValue) return;
    moveData.push({
      current: this.state.current,
      boxNo: id + 1,
      position: this.state.cells.filter((cell) => cell !== null).length + 1,
    });
    //otherwise go to next value
    //if current player is o then go to x
    let nextValue = this.state.current === "O" ? "X" : "O";
    let newCells = [...this.state.cells];
    newCells[id] = this.state.current;
  

    this.setState({ current: nextValue, cells: newCells,playerTurn:!this.state.playerTurn });
    
  };

  reset = () => {
    //to set the values to null
    this.setState({
      current: "O",
      cells: [null, null, null, null, null, null, null, null, null],
    
    moveData : [],

    playerTurn:true,
    reset:!this.state.reset
   
   
    //console.log("reset done");
  });
  stop=false;
  };

  calculateWinner(cellArray) {
    const array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let entry of array) {
      // const [a, b, c] = lines[i];
      if (
        cellArray[entry[0]] &&
        cellArray[entry[1]] === cellArray[entry[0]] &&
        cellArray[entry[1]] === cellArray[entry[2]]
      ) {
        //returns the status of winner
        return { status: cellArray[entry[0]], array: entry };
      }
    }
    return null;
  }

  readName=(name,label)=>{
    if(label==="player 1")
    this.setState({playerName1:name})
    else
    this.setState({playerName2:name})


  }
  renderContent() {
    let status;
    let object;
    if (
      this.state.cells.filter((cell) => cell !== null).length ===
        this.state.cells.length &&
      !this.calculateWinner(this.state.cells)
    )
      status = "Draw";
    else {
      //winner
      object = this.calculateWinner(this.state.cells);
      if (object){
        status =
        "Winner Is:" +
        // object.status +
        // "{" +
        // (this.state.current === "O"
        //   ? this.props.player2
        //   : this.props.player1) +
        // "}";
        (object.status==="O"
        ?this.state.playerName1
        :this.state.playerName2);
        stop=true;
      }
       
      //go to next move
      else
        status =
          "Next Move:" +
          this.state.current +
          "{" +
          (this.state.current === "O"
            ? this.state.playerName1
            : this.state.playerName2) +
          "}";
    }
    console.log(this.props.player1);
    return (
      <>
        <h2>{status}</h2>
        <table>
          <tr>
            <td>
              <Board
                handleCellClick={this.handleCellClick}
                getWinner={object}
                cells={this.state.cells}
              />
            </td>
            <td>
              
                <MyTable newRow={moveData} />
              
            </td>
          </tr>
        </table>

        <Timer name={this.props.playerName1} id="O" playing={this.state.playerTurn} resetFlag={this.state.reset} stopFlag={stop}></Timer>
        <Timer name={this.props.playerName2} id="X" playing={this.state.playerTurn} resetFlag={this.state.reset} stopFlag={stop}></Timer>
        <button
          style={{
            marginTop: "1px",
            marginLeft: "155px",

            fontSize: "25px",
            backgroundColor: "lightblue",
          }}
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }

 
  renderInput() {
    return (
      <>
        <InputDemoComponent
          value="O"
          handleName={this.readName}
          label="player 1"
        />
        <br></br>
        <p></p>
        <InputDemoComponent
          value="X"
          handleName={this.readName}
          label="player 2"
        />

       
        
      </>
    );
  }


  
  render() {
    let styles;
    if(this.state.flag===true) styles={display:"none"};
    return (
      <>
        <h1 className='primary'>Tic Tac Toe Game</h1>
{this.state.flag===false ? this.renderInput():this.renderContent()} 

<p></p>
       <button style={styles} onClick={() =>this.setState({flag:true})}>
          start
        </button> 
        {/* <Board cells={this.state.cells}/> */}
      </>
    );
  }

}


let MyTable = (props) => {
  return (
    <table className="MyTable">
      <tr>
        <th>serial number</th>
        <th>player</th>
        <th>box number</th>
      </tr>
      {props.newRow.map((row) => {
        return (
          <tr>
            <td>{row.position}</td>
            <td>{row.current}</td>
            <td>{row.boxNo}</td>
          </tr>
        );
      })}
    </table>
  );
};


export default App;
