function myFunction() {
    var dropdown = document.getElementById("dropdown-links");
    if(dropdown.style.display === "grid"){
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "grid";
    }
}