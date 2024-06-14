import React, { useState } from "react";
import "./App.css";

export default function Tic_Tac_Toe() {
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState('');
  const [char, setChar] = useState('X');
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const getBGClass = (value) => {
    if (value === 'X') return 'yellow';
    if (value === 'O') return 'orange';
    return '';
  };

  const checkWinner = (updatedMatrix) => {
    // Rows
    for (let i = 0; i < 3; i++) {
      if (updatedMatrix[i][0] && updatedMatrix[i][0] === updatedMatrix[i][1] && updatedMatrix[i][1] === updatedMatrix[i][2]) {
        setWinner(`${updatedMatrix[i][0]} is the winner`);
        return;
      }
    }

    // Columns
    for (let i = 0; i < 3; i++) {
      if (updatedMatrix[0][i] && updatedMatrix[0][i] === updatedMatrix[1][i] && updatedMatrix[1][i] === updatedMatrix[2][i]) {
        setWinner(`${updatedMatrix[0][i]} is the winner`);
        return;
      }
    }

    // Diagonals
    if (updatedMatrix[0][0] && updatedMatrix[0][0] === updatedMatrix[1][1] && updatedMatrix[1][1] === updatedMatrix[2][2]) {
      setWinner(`${updatedMatrix[0][0]} is the winner`);
      return;
    }
    if (updatedMatrix[0][2] && updatedMatrix[0][2] === updatedMatrix[1][1] && updatedMatrix[1][1] === updatedMatrix[2][0]) {
      setWinner(`${updatedMatrix[0][2]} is the winner`);
      return;
    }

    if (count === 9) {
      setWinner('The Match has been Drawn');
    }
  };

  const handleClick = (r, c) => {
    if (matrix[r][c] || winner) return;

    const updatedMatrix = [...matrix];
    updatedMatrix[r][c] = char;
    setMatrix(updatedMatrix);
    setChar(char === 'X' ? 'O' : 'X');
    setCount(count + 1);
    checkWinner(updatedMatrix);
  };

  const resetGame = () => {
    setWinner('');
    setMatrix([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setCount(1);
    setChar('X');
  };

  return (
    <div className="app">
      <div className="header aligncenter">Tic tac toe</div>
      <div className="aligncenter board">
        {!winner && <p>{char} turn now</p>}
        <div className="gameBoard">
          {winner || 
            matrix.map((row, rIndex) => (
              <div className="row" key={rIndex}>
                {row.map((cell, cIndex) => (
                  <div
                    key={cIndex}
                    onClick={() => handleClick(rIndex, cIndex)}
                    className={`cell aligncenter ${getBGClass(matrix[rIndex][cIndex])}`}
                  >
                    {matrix[rIndex][cIndex]}
                  </div>
                ))}
              </div>
            ))
          }
        </div>
        <button onClick={resetGame} className="poi">Restart Game</button>
      </div>
    </div>
  );
}
