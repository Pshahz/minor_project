document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const menuBtn = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");
    const bookBtn = document.getElementById("book-btn");
    const homeMenuButton = document.getElementById("home-menu-button");
    const signOutMenuButton = document.getElementById("signout-menu-button");
    const backBtn = document.getElementById("back-btn-home");
    const submitBookingBtn = document.getElementById("submit-booking-btn");

    let currentUsername = ""; // Variable to store the current username

    // Handle login functionality
    loginBtn.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("login-error");

        // Update password check to "SRM123"
        if (username === "Admin" && password === "SRM123") {
            errorMsg.textContent = "";
            document.getElementById("login-page").style.display = "none";
            document.getElementById("home-page").style.display = "block";
            document.querySelector(".app-bar").style.display = "flex"; // Show app bar
        } else {
            errorMsg.textContent = "Invalid username or password!";
        }
    });

    // Handle sidebar menu button click
    menuBtn.addEventListener("click", function() {
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0"; // Slide in sidebar
        } else {
            sidebar.style.left = "-250px"; // Slide out sidebar
        }
    });

    // Handle booking button click
    bookBtn.addEventListener("click", function() {
        document.getElementById("home-page").style.display = "none";
        document.getElementById("booking-page").style.display = "block";
    });

    // Handle home menu button click
    homeMenuButton.addEventListener("click", function() {
        document.getElementById("home-page").style.display = "block";
        document.getElementById("booking-page").style.display = "none";
        document.getElementById("thank-you-page").style.display = "none"; // Hide thank you page
        sidebar.style.left = "-250px"; // Hide sidebar
    });

    // Handle sign-out menu button click
    signOutMenuButton.addEventListener("click", function() {
        alert("Signed out successfully.");
        
        // Reset app state
        document.getElementById("login-page").style.display = "block"; // Show login page
        document.getElementById("home-page").style.display = "none"; // Hide home page
        document.getElementById("booking-page").style.display = "none"; // Hide booking page
        document.getElementById("tracker-page").style.display = "none"; // Hide tracker page
        document.getElementById("thank-you-page").style.display = "none"; // Hide thank you page
        sidebar.style.left = "-250px"; // Hide sidebar

        // Reset input fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        
        // Clear any stored user data
        currentUsername = ""; // Clear current username
    });

    // Handle booking submission
    submitBookingBtn.addEventListener("click", function() {
        const bookingUsername = document.getElementById("book-username").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const shippingAddress = document.getElementById("shipping-address").value;

        if (bookingUsername && email && address && phone && shippingAddress) {
            document.getElementById("thank-you-username").textContent = bookingUsername;
            document.getElementById("booking-page").style.display = "none"; // Hide booking page
            document.getElementById("thank-you-page").style.display = "block"; // Show thank you page
        } else {
            alert("Please fill all fields.");
        }
    });

    // Back button to return to home from booking page
    backBtn.addEventListener("click", function() {
        document.getElementById("booking-page").style.display = "none"; // Hide booking page
        document.getElementById("home-page").style.display = "block"; // Show home page
    });
});
