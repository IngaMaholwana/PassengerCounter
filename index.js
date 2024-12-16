let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


//document.getElementById("count-el").innerText = 5
function increment() { 
    count  += 1
    countEl.innerText = count
    
}
// grab save-el paragraph en store its variable called save-el
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}