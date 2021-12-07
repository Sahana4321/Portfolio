const http = require('http');
const fs=require('fs');



http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url=='/home'|| req.url =='/'){
        let data = fs.readFileSync('Static/index.html');
        res.write(data);

    }
    else if(req.url=='/about'){
        let data=fs.readFileSync('Static/about.html');
        res.write(data)
    }else{
        let data =fs.readFileSync('Static/error.html');
        res.write(data);
    }
    res.end();
}).listen(9080, () => {console.log('Server started')});