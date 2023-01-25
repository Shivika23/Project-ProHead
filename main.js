function logout() {

    window.location = "prohead.html"

}

user = localStorage.getItem("name")

document.getElementById("welcome").innerHTML = "Welcome " + user + "!"

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

function clear() {
    document.getElementById("textbox").innerHTML = "";
}

recognition.onresult = function (event) {

    console.log(event);

    content = event.results[0][0].transcript

    console.log(content)

    document.getElementById("textbox").innerHTML = content;
}