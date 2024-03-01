window.onload = function() {
    // Game Board Styling
    const gameBoard = document.querySelector('.game-board');
    gameBoard.style.display = 'grid'; // Ensure grid layout
    gameBoard.style.width = '100vh';  // Full viewport width
    gameBoard.style.margin = '0 auto'; // Center horizontally
    gameBoard.style.justifyContent = 'center'; // Center vertically
    // Cell styling
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.style.border = '2px solid black';
    });
    // Restart Button Styling
    const restartButton = document.getElementById('restartButton');
    restartButton.style.marginTop = '20px';
    restartButton.style.padding = '5px';
  };
  
  // Select the game board element
  var gameBoard = document.querySelector('.game-board');
  // Check if the game board element is found
  if (gameBoard) {
      // Apply styling to center the game board and set its width
      gameBoard.style.justifyContent = "center";
      gameBoard.style.width = "100wh";
      // Initialize the current player (Player 'X' starts)
      var currentPlayer = 'X';
      // Add click event listeners to each cell
      var cells = document.querySelectorAll('.cell');
      cells.forEach(function(cell) {
          // Apply border styling to each cell
          cell.style.borderStyle = "solid";
          cell.style.borderWidth = "2px";
          // Add click event listener to each cell
          cell.addEventListener('click', function() {
              // Check if the cell is not already marked
              if (!cell.textContent.trim()) {
                  // Mark the cell with the current player's symbol ('X' or 'O')
                  cell.textContent = currentPlayer;
                  // Switch to the next player
                  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
              }
          });
      });
      // Select the restart button element
      var restartButton = document.querySelector('#restartButton');
      // Check if the restart button element is found
      if (restartButton) {
          // Apply styling to the restart button
          restartButton.style.marginTop = "20px";
          restartButton.style.padding = "5px";
          // Add click event listener to the restart button
          restartButton.addEventListener('click', function() {
              // Clear the content of all cells
              cells.forEach(function(cell) {
                  cell.textContent = '';
              });
              // Reset the current player to 'X'
              currentPlayer = 'X';
          });
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  