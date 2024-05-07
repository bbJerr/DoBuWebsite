function openPasswordResetModal() {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('password-reset-modal').style.display = 'block';
}

function closePasswordResetModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('password-reset-modal').style.display = 'none';
}

function resetPassword() {
let resetEmail = document.getElementById('reset-email').value;

// Check if the email is valid
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!resetEmail.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
}

// Check if the user with the provided email exists
let user_records = JSON.parse(localStorage.getItem("users")) || [];
const user = user_records.find((v) => v.email === resetEmail);

if (user) {
    alert("Password reset link sent to your email.");
    closePasswordResetModal();
} else {
    alert("No user found with that email.");
}
}