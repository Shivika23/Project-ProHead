function login() {
    window.location="login.html"
}

function signin() {
    window.location="sign_in.html"

    localStorage.removeItem("name")

    localStorage.removeItem("password")
}