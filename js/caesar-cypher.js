const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const numberToShift = 5

function encrypt() {
    let word = document.getElementById("encryptor-text").value;
    let finalText = '';
    let outputText = document.getElementById("output");
    let copyButton = document.getElementById("copy-button");

    // Function to display text with typewriter effect
    function typeWriter(text, i) {
        if (i < text.length) {
            let char = text.charAt(i);
            if (alphabet.includes(char)) {
                let index = alphabet.indexOf(char);
                let newIndex = (index + numberToShift) % 26;
                finalText += alphabet[newIndex];
            } else {
                finalText += char;
            }
            outputText.innerHTML = finalText;
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 5); // Typing speed (milliseconds)
        } else {
            // Typing complete, show copy button and set final text
            outputText.style.visibility = "visible";
            copyButton.style.visibility = "visible";
            finalText = outputText.innerHTML;
        }
    }

    // Clear previous content
    outputText.innerHTML = '';

    // Start typewriter effect
    typeWriter(word, 0);

    // Handle visibility based on finalText
    if (finalText === "") {
        outputText.style.visibility = "hidden";
        copyButton.style.visibility = "hidden";
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "visible";
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "visible";
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "visible";
    } else {
        outputText.style.visibility = "visible";
        copyButton.style.visibility = "visible";
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "hidden";
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "hidden";
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "hidden";
    }
}




function decrypt() {
    let word = document.getElementById("encryptor-text").value;
    let finalTextD = '';
    let outputText = document.getElementById("output");
    let copyButton = document.getElementById("copy-button");

    // Function to display text with typewriter effect
    function typeWriter(text, i) {
        if (i < text.length) {
            let charD = text.charAt(i);
            if (alphabet.includes(charD)) {
                let indexD = alphabet.indexOf(charD);
                let newIndexD = (indexD - numberToShift + alphabet.length) % alphabet.length;
                finalTextD += alphabet[newIndexD];
            } else {
                finalTextD += charD;
            }
            outputText.innerHTML = finalTextD;
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 5); // Typing speed (milliseconds)
        } else {
            // Typing complete, show copy button and set final text
            outputText.style.visibility = "visible";
            copyButton.style.visibility = "visible";
            finalTextD = outputText.innerHTML;
        }
    }

    // Clear previous content
    outputText.innerHTML = '';

    // Start typewriter effect
    typeWriter(word, 0);

    // Handle visibility based on finalTextD
    if (finalTextD === "") {
        outputText.style.visibility = "hidden";
        copyButton.style.visibility = "hidden";
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "visible";
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "visible";
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "visible";
    } else {
        outputText.style.visibility = "visible";
        copyButton.style.visibility = "visible";
        let image = document.getElementsByClassName("m-n-found")[0];
        image.style.visibility = "hidden";
        let messageNotFound = document.getElementsByClassName("m-n-found")[1];
        messageNotFound.style.visibility = "hidden";
        let descriptionp = document.getElementsByClassName("m-n-found")[2];
        descriptionp.style.visibility = "hidden";
    }
}


function copy() {

    var textarea = document.getElementById("output");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);

    var popup = document.getElementById('popupMessage');
    popup.style.display = 'block'; // Show the popup initially
    setTimeout(function() {
        popup.style.opacity = '1'; // Fade in the popup
    }, 100);

    setTimeout(function() {
        popup.style.opacity = '0'; // Fade out the popup
    }, 1500);

    setTimeout(function() {
        popup.style.display = 'none'; // Hide the popup after fading out
    }, 2000);
};