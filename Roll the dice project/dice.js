// Function to roll the dice and update the message
function rollDice() {
    let randomnumberdice1 = Math.floor((Math.random() * 6) + 1);
    let randomnumberdice2 = Math.floor((Math.random() * 6) + 1);
    let randomimg1 = "/Dicee Challenge - Starting Files/images/dice" + randomnumberdice1 + ".png";
    let randomimg2 = "/Dicee Challenge - Starting Files/images/dice" + randomnumberdice2 + ".png";
    
    let image1 = document.getElementsByClassName("img1")[0];
    let image2 = document.getElementsByClassName("img2")[0];
    
    let message = document.getElementById("message");

    if (randomnumberdice1 > randomnumberdice2) {
        message.innerHTML = "Player 2 is noob";
    } else if (randomnumberdice2 > randomnumberdice1) {
        message.innerHTML = "Player 1 is noob";
    } else {
        message.innerHTML = "Both are Noob!";
    }

    // Hide the dice images initially
    image1.style.display = "none";
    image2.style.display = "none";

    // Set the source of the images
    image1.setAttribute("src", randomimg1);
    image2.setAttribute("src", randomimg2);

    // Show the dice images with a delay
    setTimeout(() => {
        image1.style.display = "block";
        image2.style.display = "block";
        
        // Trigger the rollAndGlow animation after displaying the dice images
        triggerRollAndGlow(image1);
        triggerRollAndGlow(image2);
    }, 100);
}

// Function to trigger the rollAndGlow animation
function triggerRollAndGlow(element) {
    // Remove previous rollAndGlow class
    element.classList.remove("rollAndGlow");

    // Trigger the rollAndGlow animation immediately
    setTimeout(() => {
        element.classList.add("rollAndGlow");
    }, 0); // Add a minimal delay to ensure the class is removed before adding again

    // Remove the rollAndGlow class after the animation ends
    setTimeout(() => {
        element.classList.remove("rollAndGlow");
    }, 1000); // Adjust the time based on the rollAndGlow animation duration
}

// Event listener for the roll button
document.getElementById("rollButton").addEventListener("click", rollDice);
