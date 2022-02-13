console.log("Hey it's working!")

var char1 = 0;
var char2 = 0;
var char3 = 0;
var char4 = 0;
var char5 = 0;

// above are the variables that store the amount each character related answer has been picked

function char1Add() {
    char1 = char1 + 1;
}

function char2Add() {
    char2 = char2 + 1;

}

function char3Add() {
    char3 = char3 + 1;

}

function char4Add() {
    char4 = char4 + 1;

}

function char5Add() {
    char5 = char5 + 1;

}
// above are the functions that define the function for each character that add a count to the counter with the user input

function finalResults() {
    char1 = char1 / 6 * 100
    char2 = char2 / 6 * 100
    char3 = char3 / 6 * 100
    char4 = char4 / 6 * 100
    char5 = char5 / 6 * 100


    var resultText = document.getElementById("results")
    resultText.innerHTML = "You are " + char1 + "% char1" + "<br>You are " + char2 + "% char2" +
        "<br>You are " + char3 + "% char3" + "<br>You are " + char4 + "% char4" + "<br>You are " + char5 + "% char5";

}

// above is the function that defines the final calculations and to output results