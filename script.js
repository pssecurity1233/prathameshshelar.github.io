function sendMessage(event) {
    event.preventDefault();

    document.getElementById("status").innerText =
        "Message sent successfully! (Demo mode — connect backend to activate)";
}
