function darkmode () {
	console.log("OK")
    let element = document.body;
    element.classList.toggle("darkmode");

    let navbar = document.getElementById("myNavbar")
    navbar.classList.toggle("darkmode")

    let topWrapper = document.getElementById("1")
    topWrapper.classList.toggle("darkmode")

    let lessonWrapper = document.getElementById("2")
    lessonWrapper.classList.toggle("darkmode")

    let footer = document.getElementById("6")
    footer.classList.toggle("darkmode")

    let sidenav = document.getElementById("mySidenav")
    sidenav.classList.toggle("darkmode")
}

function openNav () {
	let sidenav = document.getElementById("mySidenav")
	sidenav.style.width = "170px"
}

function closeNav () {
	let sidenav = document.getElementById("mySidenav")
	sidenav.style.width = "0"
}