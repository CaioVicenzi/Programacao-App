var greeting = document.getElementById('greeting')
var username = ""

function login() {
    username = prompt("Enter your username")

    if (username === "" || username === null) {
        alert("Please enter a username")
        login()
    } else {
        greeting.innerHTML = "Bem vindo " + username + "!"

        let logoutButton = document.createElement("button")
        logoutButton.innerText = 'Logout'
        logoutButton.onclick = logout
        greeting.appendChild(logoutButton)


    }
}

function logout () {
    alert("Você deslogou.")
    greeting.innerHTML = `Até mais ${ username }!`
}