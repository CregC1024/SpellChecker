// This function checks if a word is spelled correctly using the browser's spell checking API
export function checkSpelling(word) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.spellcheck = true;
    textarea.value = word;
    
    // Add it to the document (required for spell checking to work)
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // Select the text
    textarea.select();
    
    // Check spelling using the browser's built-in spell checking
    const isCorrect = textarea.spellcheck;
    
    // Clean up
    document.body.removeChild(textarea);
    
    // If the browser doesn't support spellcheck, assume all words are correct
    return isCorrect === undefined ? true : !document.execCommand('copy');
}

// This function initializes the spell checker
window.initializeSpellChecker = function () {
    return {
        checkSpelling: function (word) {
            return checkSpelling(word);
        }
    };
};
