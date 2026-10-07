let fs = require('fs')

fs.writeFile('message.html','Hii Raa Kanaa How r u', (err)=>{
    if (err) throw 'some glitch'
    console.log('SuccessFull file creatred');
})

// fs.readFile('./index.html','utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
    
// })