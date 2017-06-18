const fs = require('fs');

var writeStream = fs.createWriteStream('./log.txt',
                                        {'flags': 'a', 
                                        'encoding' :'utf8', 
                                        'mode' : 0666});

writeStream.on('open', function(){
    fs.readdir('./data', function(err, files) {
        if(err) {
            console.log(err);
        } else {
            files.forEach(function(name) {
                fs.readFile('./data/' + name, 'utf8', function(err, data){
                    if(err) {
                        console.log(err);
                    } else {
                        writeStream.write(data, 'utf8' ,function(err) {
                            if(err) console.log(err);
                        })
                    }
                })
            })
        }
    })
})

writeStream.on('error', function(err) {
    if(err) console.log(err);
})
