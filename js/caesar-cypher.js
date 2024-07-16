const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt() {
    let word = document.getElementById("encryptor-text").value;
    let finalText = '';
    let outputText = document.getElementById("output");
    let copyButton = document.getElementById("copy-button");

    if (!isValidInput(word)) {
        updateVisibility("");
        return;
    }

    function typeWriter(text, i) {
        if (i < text.length) {
            let char = text.charAt(i);
            if (char in encryptionKeys) {
                finalText += encryptionKeys[char];
            } else {
                finalText += char;
            }
            outputText.innerHTML = finalText;
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 5);
        } else {
            outputText.style.visibility = "visible";
            copyButton.style.visibility = "visible";
            finalText = outputText.innerHTML;
        }
    }

    outputText.innerHTML = '';
    typeWriter(word, 0);

    updateVisibility(finalText);
}

function decrypt() {
    let word = document.getElementById("encryptor-text").value;
    let finalTextD = word;
    let outputText = document.getElementById("output");
    let copyButton = document.getElementById("copy-button");

    if (!isValidInput(word)) {
        updateVisibility("");
        return;
    }

    for (let key in encryptionKeys) {
        let value = encryptionKeys[key];
        finalTextD = finalTextD.split(value).join(key);
    }

    function typeWriter(text, i) {
        if (i < text.length) {
            outputText.innerHTML = text.substring(0, i + 1);
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 5);
        } else {
            outputText.style.visibility = "visible";
            copyButton.style.visibility = "visible";
        }
    }

    outputText.innerHTML = '';
    typeWriter(finalTextD, 0);

    updateVisibility(finalTextD);
}

function isValidInput(text) {
    if (/[A-Z]/.test(text)) {
        alert("Error: Uppercase letters are not allowed.");
        return false;
    }
    if (/[áéíóúÁÉÍÓÚñÑ]/.test(text)) {
        alert("Error: Accented letters are not allowed.");
        return false;
    }
    if (/[^a-z\s]/.test(text)) {
        alert("Error: Special characters are not allowed.");
        return false;
    }
    return true;
}

function updateVisibility(text) {
    let outputText = document.getElementById("output");
    let copyButton = document.getElementById("copy-button");
    let elements = document.getElementsByClassName("m-n-found");

    if (text === "") {
        outputText.style.visibility = "hidden";
        copyButton.style.visibility = "hidden";
        for (let el of elements) {
            el.style.visibility = "visible";
        }
    } else {
        outputText.style.visibility = "visible";
        copyButton.style.visibility = "visible";
        for (let el of elements) {
            el.style.visibility = "hidden";
        }
    }
}

function copy() {
    var textarea = document.getElementById("output");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);

    var popup = document.getElementById('popupMessage');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.opacity = '1';
    }, 100);

    setTimeout(function() {
        popup.style.opacity = '0';
    }, 1500);

    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}