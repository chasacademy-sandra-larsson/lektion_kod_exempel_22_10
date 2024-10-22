
document.addEventListener("DOMContentLoaded", function() {
// Lägg till alla färgerna i listan "myList"

const ul = document.getElementById("myList");
console.log(ul)

const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", 
    "Purple", "Pink", "Brown", "Black", "White",
    "Gray", "Cyan", "Magenta", "Lime", "Indigo",
    "Violet", "Turquoise", "Gold", "Silver", "Maroon"
  ];


// Alternativ 1 - skapa element med createElement och lägg till med appendChild() på parent
colors.forEach(function(item) {
    const li = document.createElement("li");
    li.classList.add("test")
    console.log(li.className)
    li.textContent = item;
    //console.log(li);
    ul.appendChild(li);
})
console.log(ul)


// Alternativ 2 - skapa en html-sträng (med backticks ``) och lägg till på parent med innerHTML
// let html = "";
// colors.forEach(function(item) {
//     html += `<li>${item}</li>`;
// })
// ul.innerHTML = html;

// Gör om med foreach!

});