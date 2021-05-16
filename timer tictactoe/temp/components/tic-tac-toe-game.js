import React from 'react';
import TicTacToeBoard from './tic-tac-toe-board';
//import InputData from './InputData';
const TicTacToeGame=()=>{
    return(<div>

    {/* <InputData></InputData> */}
         <TicTacToeBoard/>
         </div>)
};

// import React, { Component } from 'react'
// let moveData=[];
// export default class TicTacToeGame extends Component {
 
//     constructor(props){
//     super(props);
//     this.state={
//        // current:'O',

//        current:this.props.player1,
//         //we have to store the previous values
//         cells:[null,null,null,null,null,null,null,null,null]
//     };
// }



// handleCellClick=(id)=>{
//     let currentValue=this.state.cells[id];
//      //if there is a value then return
//     if(calculateWinner(this.state.cells)||currentValue)return;
//     moveData.push({
//         current:this.state.current,
//         boxNo:id+1,
//         position:this.state.cells.filter((cell)=>cell!==null).length+1,
//     });
//     //otherwise go to next value
//     //if current player is o then go to x
//     let nextValue=this.state.current==="O"?"X":"O";     
//     let newCells=[...this.state.cells];
//     newCells[id]=this.state.current;
    
//     this.setState({current:nextValue,cells:newCells});
//     // console.log('cells',newCells);
//     // console.log('next',newNext);
   
// };





// //reset function 
// reset=()=>{
//    //to set the values to null
//     this.setState({
//         current:"O",
//         cells:[null,null,null,null,null,null,null,null,null],

//     });
//     moveData=[];
//     console.log("reset done");
// };


//     render() {
//         return (
//             <div>
                


//             </div>
//         )
//     }
// }



 
export default TicTacToeGame;