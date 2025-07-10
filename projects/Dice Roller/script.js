const dice = document.getElementById('dice');

function rollDice() {
  
  dice.classList.add('shake');


  setTimeout(() => {
    const value = Math.floor(Math.random() * 6) + 1;
    drawDots(value);
    dice.classList.remove('shake');
  }, 400);
}

function drawDots(value) {
  dice.innerHTML = '';

  const positions = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  for (let i = 0; i < 9; i++) {
    const dot = document.createElement('div');
    if (positions[value].includes(i)) {
      dot.classList.add('dot');
    }
    dice.appendChild(dot);
  }
}
