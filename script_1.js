function login(username, password) {
    // Hardcoded values for demonstration purposes
    const validUsername = "admin";
    const validPassword = "password123";

    // Check if the entered username and password are correct
    if (username === validUsername && password === validPassword) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid username or password. Please try again.");
        return false;
    }
}

// Example usage
const usernameInput = "admin";
const passwordInput = "password123";

login(usernameInput, passwordInput);