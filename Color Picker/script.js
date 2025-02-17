document.getElementById("colorInput").addEventListener("input", function(){
    //get selected color from input
    let selectedColor = event.target.value

    //update color text
    document.getElementById("colorCode").textContent = selectedColor

    //update bg color to display color
    document.getElementById("color-display").style.backgroundColor = selectedColor
})