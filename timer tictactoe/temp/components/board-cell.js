import React from 'react';  


  const BoardCell=(props)=>{
      
    
let style;
        if(props.onWinner){
            for(let index of props.onWinner){
                if(props.id === index)
                style={
                    backgroundColor:"yellow"
                }
            }
        }
    return (
        <button 
        className="cell"
        onClick={()=>props.onCellClick(props.id)}
         style={style}
       
    
       >{props.value}
       </button>

    );
};



export default BoardCell;