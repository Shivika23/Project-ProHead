function login() {
    get_name= document.getElementById("name").value
    check_name= localStorage.getItem("name")

    get_password = document.getElementById("password").value
    check_password=localStorage.getItem("password")


    if (check_name==get_name,check_password==get_password) {
      window.location= "index.html"  
    } else {
        document.getElementById("wrong").innerHTML = "*Incorrect Password or Username*"

    }

}

 function a2() {
    window.location="prohead.html"
 }