const menuHome = () => {
    document.getElementById("main").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "background-color: white; color: black;"
    document.getElementById("menuGame").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuJukebox").style = "background-color: #298EB5; color: white;"

}

const menuGame = () => {
    document.getElementById("main").setAttribute("src", "game.html")
    document.getElementById("menuGame").style = "background-color: white; color: black;"
    document.getElementById("menuHome").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuJukebox").style = "background-color: #298EB5; color: white;"
}

const menuJukebox = () => {
    document.getElementById("main").setAttribute("src", "jukebox.html")
    document.getElementById("menuJukebox").style = "background-color: white; color: black;"
    document.getElementById("menuHome").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuGame").style = "background-color: #298EB5; color: white;"
}
