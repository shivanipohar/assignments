import React from 'react';  
import Cell from './board-cell';


// let moveData=[];

class Board extends React.Component{
    constructor(props){
    super(props);
    this.state={
       // current:'O',

       current:this.props.player1,
        //we have to store the previous values
        cells:[null,null,null,null,null,null,null,null,null]
    };
}



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

// render(){
//     let status;
//     let object;
//     if(
//         this.state.cells.filter((cell)=>cell!==null).length===
//         this.state.cells.length&&
//         !calculateWinner(this.state.cells)

//     )
//     status="Draw";
//     else{
//         //winner
//         object=calculateWinner(this.state.cells);
//         if(object) status="Winner Is:" +object.status+"{"+(this.state.current==='O' ?this.props.player2: this.props.player1)+"}";
//         //go to next move
//         else status="Next Move:"+this.state.current+"{"+(this.state.current==='O' ?this.props.player1: this.props.player2)+"}";
//     }
//     console.log(this.props.player1);
//     return (
//         <>
        
//         <h2>{status}</h2>
//         <table>
//             <tr>
//                 <td>
//                 <div className='board'>
//             {this.state.cells.map((element,id)=>(
//                 <Cell 
//                 //id is index of that elemet
//                 id={id}
//                 value={element}
//                 //it displays value
//                 onCellClick={this.handleCellClick}
//                 onWinner={object ? object.array:null}
//                 />          
//             ))}      
//             </div>
//                 </td>
//                 <td>
//                 <div>
//                     <MyTable newRow={moveData}/>
//                 </div>
//                 </td>
//             </tr>
//         </table>
//         <button

//         style={{
//             marginTop:"1px",
//             marginLeft:"75px",
           
//             fontSize:"25px",
//             backgroundColor:"lightblue",
//         }}
//         onClick={this.reset}
//         >
//             Reset
//             </button>
//         </>
//     );
            
// }
// }
// function calculateWinner(cellArray) {
//     const array = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let entry of array) {
//      // const [a, b, c] = lines[i];
//       if (cellArray[entry[0]] && cellArray[entry[1]]=== cellArray[entry[0]] && cellArray[entry[1]] === cellArray[entry[2]]) {
//           //returns the status of winner
//         return {status:cellArray[entry[0]],array:entry};
//       }
//     }
//     return null;
//   }
  
//   let MyTable=(props) =>{
//       return(
//           <table className="MyTable">
//           <tr>
//         <th>serial number</th>
//         <th>player</th>
//         <th>box number</th>
//           </tr>
//           {
//               props.newRow.map((row) =>
//               {
//                   return(<tr>
//                       <td>{row.position}</td>
//                         <td>{row.current}</td>
//                         <td>{row.boxNo}</td>
//                   </tr>)
//               })
//           }
//           </table>
//       );
//   };

export default Board;