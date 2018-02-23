var fs = require('fs');
var recursive = require("recursive-readdir");

const TODO = '//TODO';

const FgYellow = '\x1b[33m%s\x1b[0m';
const Reset = "\x1b[0m";


exports.search = function (path) {
    recursive(path, function (err, files) {
        if (files) {
            files.forEach(file => {
                searchInFile(file, TODO);
            });
        } else {
            console.log("Could not find //TODO string in directory");
        }
    });
}

function searchInFile(file, text) {
    fs.readFile(file, function (err, data) {
        if (data && data.indexOf(text) >= 0) {
            printMessage(file);
        }
    });
}


function printMessage(file) {
    console.log(FgYellow, 'TODO string was found in ' + file);
    console.log(Reset, '');
}
