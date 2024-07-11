const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const numberToShift = 5

function encrypt(){

    let word = document.getElementById("encryptor-text").value;
    let finalText = '';
    for (l = 0 ; l < word.length ; l++) {
        let char = word[l];
        if (alphabet.includes(char)){
            let index = alphabet.indexOf(char);
            let newIndex = (index + numberToShift) % 26;
            finalText += alphabet[newIndex];
        } else {
            finalText += char;
        };
    }

    if (finalText === "") {
        let outputText = document.getElementById("output");
        outputText.style.visibility = "hidden"
        outputText.innerHTML = `${finalText}`
        let copybuttom = document.getElementById("copy-button");
        copybuttom.style.visibility = "hidden"
    
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "visible"
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "visible"
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "visible"

    } else {
        let outputText = document.getElementById("output");
        outputText.style.visibility = "visible"
        outputText.innerHTML = `${finalText}`
        let copybuttom = document.getElementById("copy-button");
        copybuttom.style.visibility = "visible"

        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "hidden"
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "hidden"
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "hidden"
    }
};



function decrypt(){

    let word = document.getElementById("encryptor-text").value;
    let finalTextD = '';
    for (l = 0 ; l < word.length ; l++) {
        let charD = word[l];
        if (alphabet.includes(charD)){
            let indexD = alphabet.indexOf(charD);
            let newIndexD = (indexD - numberToShift + alphabet.length) % alphabet.length;
            finalTextD += alphabet[newIndexD];
        } else {
            finalTextD += charD;
        };
    }

    if (finalTextD === "") {
        let outputText = document.getElementById("output");
        outputText.style.visibility = "hidden"
        outputText.innerHTML = `${finalTextD}`
        let copybuttom = document.getElementById("copy-button");
        copybuttom.style.visibility = "hidden"
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "visible"
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "visible"
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "visible"
        
    } else {
        let outputText = document.getElementById("output");
        outputText.style.visibility = "visible"
        outputText.innerHTML = `${finalTextD}`
        let copybuttom = document.getElementById("copy-button");
        copybuttom.style.visibility = "visible"
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "hidden"
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "hidden"
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "hidden"
    }
};

function copy() {

    var textarea = document.getElementById("output");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
};