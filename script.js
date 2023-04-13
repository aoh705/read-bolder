function boldifyEnd(currentWord){
    var boldStr = currentWord.substring(0, 3);
    var end = currentWord.substring(3, currentWord.length);
    currentWord = boldStr.bold() + end;
    return currentWord;
}


function boldifyText(input){
        var newString = "";
        var currentWord = "";
        
        for(var i = 0; i < input.length; i++){
            if ((/\s/).test(input[i])){ 
                //make first three characters bold and add to newString
                var currentWord = boldifyEnd(currentWord);
                newString += currentWord + input[i];
                currentWord = "";
            }
            else{
                currentWord += input[i];
            }
        }
        if (currentWord.length > 0){
            var lastWord = boldifyEnd(currentWord);
            newString += lastWord;
        }
        return newString;
}

function doUpdate(){
    var inputElem = document.getElementById("textInput");
    var outputElem = document.getElementById("textOutput");
    outputElem.innerHTML = boldifyText(inputElem.value);
}


