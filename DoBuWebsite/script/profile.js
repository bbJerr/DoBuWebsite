// Wait for the document to be ready before executing JavaScript code
$(document).ready(function() {
    // Check if the user is logged in
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const user_records = JSON.parse(localStorage.getItem("users")) || [];
    const user = user_records.find((v) => v.email === email);

    if (name && user) {
        const fullName = user.firstname + ' ' + user.lastname;
        document.getElementById('full-name').textContent = fullName;
        document.getElementById('contact-number').textContent = user.contactnumber;
        document.getElementById('email').textContent = user.email;
    } else {
        alert('Please log in first.');
        window.location.href = 'sign-in.html';
    }

    // Check if profile picture is stored in local storage and display it
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
        document.getElementById('profile-image').src = storedProfileImage;
    }

    // Define the changeProfilePicture function
    const changeProfileButton = document.getElementById('change-profile-button');
    const fileInput = document.getElementById('file-input');
    const profileImage = document.getElementById('profile-image');

    changeProfileButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function () {
                profileImage.src = reader.result;

                // Store the profile picture in local storage
                localStorage.setItem('profileImage', reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    });

    function logOutUser() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profileImage');

        window.location.href = 'sign-in.html';
    }

    const logOutButton = document.getElementById('log-out-button');
    logOutButton.addEventListener('click', logOutUser);
});
