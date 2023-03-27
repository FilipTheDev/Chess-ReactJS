import "./ChessBoard.css";

const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
const vertical = [1, 2, 3, 4, 5, 6, 7, 8];

function ChessBoard() {
  let fullBoard = [];
  for (let i = vertical.length; i > 0; i--) {
    for (let j = 0; j < horizontal.length; j++) {
      const number = j + i + 2;
      if (number % 2 === 0) {
        fullBoard.push(<div className="square black"></div>);
      } else {
        fullBoard.push(<div className="square white"></div>);
      }
    }
  }
  return <div className="board"> {fullBoard} </div>;
}

export default ChessBoard;
