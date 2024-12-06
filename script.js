 // Function to greet the user
 function greetUser() {
    let name = document.getElementById('name').value;
    let greetingMessage = `Hello, ${name}! Welcome!`;
    document.getElementById('greeting-message').textContent = greetingMessage;
}

// Function to change text color to a random color
function changeTextColor() {
    const randomColor = getRandomColor();
    document.getElementById('greeting-message').style.color = randomColor;
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}