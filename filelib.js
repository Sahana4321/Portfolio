let d= fs.readFileSync("new.txt");

fs.writeFile('new.txt', d.toString() +' Hello', (err) =>{
    if(err== null)
        console.log('Success');
    else{
        console.log(err.message);
    }
});