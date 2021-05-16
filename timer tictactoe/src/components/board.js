import Cell from "./cells";

const Board = (props) => {
  return (
    <div className="board">
     
      {props.cells.map((element, id) => (
        <Cell
          //id is index of that elemet
          id={id}
          value={element}
          //it displays value
          onCellClick={props.handleCellClick}
          onWinner={props.getWinner ? props.getWinner.array : null}

        />
      ))}
    </div>
  );
};
export default Board;