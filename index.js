document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const registerWrapper = document.querySelector('.register-wrapper');
    const loginWrapper = document.querySelector('.login-wrapper');

    registerLink.addEventListener('click', () => {
        loginWrapper.style.display = 'none'; // Hide login form
        registerWrapper.style.display = 'block'; // Show register form
    });

    loginLink.addEventListener('click', () => {
        
        registerWrapper.style.display = 'none'; // Hide register form
        loginWrapper.style.display = 'block'; // Show login form
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-wrapper form');

    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const emailInput = document.querySelector('.login-wrapper input[type="email"]');
        const passwordInput = document.querySelector('.login-wrapper input[type="password"]');
        
        // Get the values entered by the user
        const enteredEmail = emailInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered values match the hardcoded values
        if (enteredEmail === "hi@gmail.com" && enteredPassword === "hihihi") {
            // Redirect to the desired HTML page
            window.location.href = "home.html";
        } 
        
        else if (enteredEmail === "hi.tech@gmail.com" && enteredPassword === "tech") {
            // Redirect to the desired HTML page
            window.location.href = "home_tech.html";
        } 

        else if (enteredEmail === "sir_art_student@gmail.com" && enteredPassword === "sirart") {
            // Redirect to the desired HTML page
            window.location.href = "home.html";
        } 

        else {
            alert("Incorrect email or password. Please try again.");
        }
    });
});
