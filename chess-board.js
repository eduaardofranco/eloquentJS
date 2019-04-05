

let board = '';

function lineOdd(width) {
  for(let line = 1; line <= width; line++) {
    if(line % 2 == 0) {
      board = board + '1';
    }
    else {
      board = board + '#';
    }
  }
}//lineOdd

function lineEven(width) {
  for(let line = 1; line <= width; line++) {
    if(line % 2 == 0) {
      board = board + '#';
    }
    else {
      board = board + '1';
    }
  }
}//lineOdd

function makeBoard(height,width) {
  for(let colum = 1;  colum <= height; colum++) {
      
    if(colum % 2 == 0) {
      lineEven(width);
    }
    else {
      lineOdd(width);
    }
    board = board + '\n';
  }
  console.log(board)
}//makeBoard

makeBoard(15,15);
