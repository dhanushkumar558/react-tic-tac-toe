import React,{useState} from "react"
export default function Tictactoe()
{
  const [Winner, setwinner]=useState('')
  const [char, setChar]=useState('X')
  const [Matrix, setMatrix]=useState([
    ['','',''],
    ['','',''],
    ['','',''],

  ]);
  const getBGClass =(value)=>
    {
      if(value==='X') return 'yellow'
      if(value==='O') return 'orange'
      return '';
    }
    const checkWinner = () => {
      // Rows
      if (Matrix[0][0] && Matrix[0][0] === Matrix[0][1] && Matrix[0][1] === Matrix[0][2]) {
          setwinner(Matrix[0][0] + ' is the winner');
      }
      if (Matrix[1][0] && Matrix[1][0] === Matrix[1][1] && Matrix[1][1] === Matrix[1][2]) {
          setwinner(Matrix[1][0] + ' is the winner');
      }
      if (Matrix[2][0] && Matrix[2][0] === Matrix[2][1] && Matrix[2][1] === Matrix[2][2]) {
          setwinner(Matrix[2][0] + ' is the winner');
      }
      
      // Columns
      if (Matrix[0][0] && Matrix[0][0] === Matrix[1][0] && Matrix[1][0] === Matrix[2][0]) {
          setwinner(Matrix[0][0] + ' is the winner');
      }
      if (Matrix[0][1] && Matrix[0][1] === Matrix[1][1] && Matrix[1][1] === Matrix[2][1]) {
          setwinner(Matrix[0][1] + ' is the winner');
      }
      if (Matrix[0][2] && Matrix[0][2] === Matrix[1][2] && Matrix[1][2] === Matrix[2][2]) {
          setwinner(Matrix[0][2] + ' is the winner');
      }
      
      // Diagonals
      if (Matrix[0][0] && Matrix[0][0] === Matrix[1][1] && Matrix[1][1] === Matrix[2][2]) {
          setwinner(Matrix[0][0] + ' is the winner');
      }
      if (Matrix[0][2] && Matrix[0][2] === Matrix[1][1] && Matrix[1][1] === Matrix[2][0]) {
          setwinner(Matrix[0][2] + ' is the winner');
      }
  };
  
    const handleClick=(r,c)=>{
      if(Matrix[r][c]) return;
      const tmpMatrix=[...Matrix];
      tmpMatrix[r][c]=char;
      setMatrix(tmpMatrix);
      setChar(char ==='X'? 'O':'X');
      checkWinner();

    }
  return(
  <div className="app">

<div className="header aligncenter">Tic tac toe</div>
<div className="aligncenter board">
 {!Winner && <p> {char} turn now</p>}
  <div className="gameBoard">
    {} 
 {Winner || 
Matrix.map((row,rIndex)=>(

  <div className="row">
    {
row.map((cell, cIndex)=>(
<div
onClick={()=>handleClick(rIndex,cIndex)}
className={`cell aligncenter ${getBGClass(Matrix[rIndex][cIndex])}`}>{Matrix[rIndex][cIndex]}</div>

))
    }
    
    </div>
))
 }
 </div>
 <button onClick={()=>{
  setwinner('')
  setMatrix([
    ['','',''],
    ['','',''],
    ['','',''],

  ])
 }} className="poi">Restart Game</button>
</div>
  </div>
);
} 