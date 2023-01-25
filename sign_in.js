function login() {
    user_name = document.getElementById("name").value
    localStorage.setItem("name", user_name)

    window.location = "index.html"

    password = document.getElementById("password").value
    localStorage.setItem("password", password)

    window.location = "index.html"
}