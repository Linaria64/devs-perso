"use client";
import {useState} from 'react'



function Squares({value, onSquareClick}:any) {

  return  <button className="border min-h-7" onClick={onSquareClick}>{value}</button> 
  
 }
 export default function Board() {

  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i:any) {

    const nexSquares = squares.slice();

    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nexSquares[i] = "X";
    } else {
      nexSquares[i] = 'O';
    }
    setxIsNext(!xIsNext)
    setSquares(nexSquares);
  };

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
      status = 'Winner' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }


  return (
    <main className="container mx-auto  border size-40  ">
      <div>{status}</div>
      <div className="grid grid-cols-3  p-2 gap-2  max-w-32">
        <Squares value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Squares value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Squares value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="grid grid-cols-3  p-2  gap-2 max-w-32">
        <Squares value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Squares value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Squares value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="grid grid-cols-3 gap-2 p-2  max-w-32">
        <Squares value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Squares value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Squares value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </main>
  );


  function CalculateWinner(squares:any) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [2,5,8],
      [1,4,7],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }  

}


