//syncronious

const fs = require('fs');

try {
    var apples = fs.readFileSync('./apples.txt','UTF8');
    console.log(apples);
    var oranges = apples.replace(/[A}a]pple/g,'orange');
    fs.writeFileSync('./oranges.txt', oranges);
} catch (error) {
    console.error(error);
}

//async

fs.readFile('./apples.txt','UTF8', function(err,data){
    if(err) {
        console.log(err);  
    } else {
        var adjData = data.replace(/[A}a]pple/g,'orange');
        fs.writeFile('./oranges.txt', adjData, function(err) {
            if(err) {
                console.log(err);
            }
        });
    }
});