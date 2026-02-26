
function updateCount(){
    const inputBox = document.getElementById("inputBox");
    let charlen = inputBox.value.length
    let update = `${160 - charlen} char remaining`;
    const counter = document.getElementById("counter");
    const inputButton = document.getElementById("inputButton");
    if(charlen === 0)
    {
        inputButton.disabled = true;
        inputButton.style.setProperty('--accept','rgb(152, 152, 152)');

    }
    else if(charlen > 160)
    {
        counter.innerHTML = "Text Length Exceeded"
        counter.style.color = "red";
        inputButton.disabled = true;
        inputButton.style.setProperty('--accept','rgb(152, 152, 152)');
    }
    else{
        counter.innerHTML = update;
        counter.style.color = "black";
        inputButton.disabled = false;
        inputButton.style.setProperty('--accept','rgb(70, 181, 255)');
    }
}

function buttonClicked(){
    const inputBox = document.getElementById("inputBox");
    let text = inputBox.value;
    alert(`Message: ${text}`);
}