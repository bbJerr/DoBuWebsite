function signupUser() {
    let firstname = document.getElementsByName("firstname")[0].value;
    let lastname = document.getElementsByName("lastname")[0].value;
    let email = document.getElementsByName("emailaddress")[0].value;
    let contactnumber = document.getElementsByName("contactnumber")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let confirmpassword = document.getElementsByName("confirmpassword")[0].value;
    
    if (!firstname || !lastname || !email || !contactnumber || !password || !confirmpassword) {
    alert("Please fill in all the required fields.");
    return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
    }

    if (password !== confirmpassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some((v) => v.email === email)) {
        alert("Email already registered. Please use a different email.");
    } else {
        user_records.push({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "contactnumber": contactnumber,
            "password": password,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration successful.");
    }

    document.getElementsByName("firstname")[0].value = "";
    document.getElementsByName("lastname")[0].value = "";
    document.getElementsByName("emailaddress")[0].value = "";
    document.getElementsByName("contactnumber")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("confirmpassword")[0].value = "";
}