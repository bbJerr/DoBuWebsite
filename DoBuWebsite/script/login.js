function loginUser() {
    let email = document.getElementsByName("emailaddress_login")[0].value;
    let password = document.getElementsByName("password_login")[0].value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    const user = user_records.find((v) => v.email === email && v.password === password);

    if (user) {
        alert("Login Pass");
        localStorage.setItem('name', user.firstname);
        localStorage.setItem('email', user.email);
        window.location.href = "profile.html";
    } else {
        alert('Login Fail');
    }
}