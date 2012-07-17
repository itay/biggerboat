var fs = require("fs");

module.exports = {
    speak: function() {
        fs.readFile("shark.txt", function(err, data) {
            console.log(data.toString()); 
        });
    }
}