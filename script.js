function playGame(userChoice) {
    const colors = ['red', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const winningColor = colors[randomIndex];
  
    let resultText = "";
  
    if (userChoice === winningColor) {
      resultText = `🎉 You chose ${userChoice.toUpperCase()} and WON!`;
    } else {
      resultText = `❌ You chose ${userChoice.toUpperCase()} and LOST! Winning color was ${winningColor.toUpperCase()}`;
    }
  
    document.getElementById("result").textContent = resultText;
  }
  function playGame(userChoice) {
    const colors = ['red', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const winningColor = colors[randomIndex];
  
    let resultText = "";
    let resultClass = "";
  
    if (userChoice === winningColor) {
      resultText = `🎉 You chose ${userChoice.toUpperCase()} and WON!`;
      resultClass = "win";
    } else {
      resultText = `❌ You chose ${userChoice.toUpperCase()} and LOST! Winning color was ${winningColor.toUpperCase()}`;
      resultClass = "lose";
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultText;
  
    // Remove previous classes
    resultDiv.classList.remove("win", "lose", "show");
  
    // Add new result class and trigger animation
    setTimeout(() => {
      resultDiv.classList.add(resultClass, "show");
    }, 50);
  }
    