// let http = require('http')
// let fs = require('fs');

// let server = http.createServer((req,res)=>{
//     console.log('hii raa kanna');
//     if (req.url === '/') {
//         res.write(`
//             <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <form action="/message" method='POST'>
//         <input type="text" name='message'>
//         <button type="submit">Submit</button>
//     </form>
// </body>
// </html>
//             `)

//      return  res.end()
//     }

//     if (req.url === '/message' && req.method === 'POST' ) {

//         let bodyData = []
//         req.on('data',(chunks)=>{
//             bodyData.push(chunks)
//         })
//         req.on('end',()=>{
//             let parsed = Buffer.concat(bodyData).toString()
//             console.log(parsed);
//             let message = parsed.split('=')[1]
//              fs.writeFileSync('message.txt',message)
//              res.end()            
//         })
//         // res.write('hello')
//     // res.end()
//     }
// })
// server.listen(8080)




let http = require('http')
let fs  = require('fs')

let server = http.createServer((req,res)=>{
    if (req.url === '/' ) {
  res.write('<h1>hii raa kanna how are you</h1>')
    res.write(`<html>
                 <head>
                    <title>node</title>
                </head>
                <body>
                    <form action='/message' method='POST' >
                    <input type="text" name='message'/> 
                    <button type="submit">submit</button>
                    </form>
                </body>
                </html>`)
return res.end();
    }

    if (req.url === '/message' && req.method === 'POST' ) {
        let bodyData = []
        req.on('data',(chunks)=>{
            bodyData.push(chunks)
        })

        req.on('end',()=>{
            let parsed = Buffer.concat(bodyData).toString()
            console.log(parsed);
            // let message = parsed.split('=')[1]
            //  fs.writeFileSync('message.txt',message)
             res.end()
        })
        // res.write('hello')
    // res.end()
    }
})


server.listen(3000)























// https://localhost:3000/

// MERN STACK

// JAVASCRIPT

// frontend 

// javascript run only inside the browser 
//         |
//     js engine
//         |
//     convernt to machine level to the browser 

//     // modules 
//     // varible 
//     // routing 
//     // events 
//     // async and await 
//     // fetch
//     //http 
//     // event loop 
    

//     rhim dhal -2009 
//         v8 - engine  
//     Node.js
//     which helps to run javascript out the browser in run time enviroment => it runs u r code as program level 

//     javascript -cheif 

//     node - 5star hotel kitchen

//     runtime enviroment => cooking 


//     why we need node js 

//         react 
//         http fetch/axios api
//         unknown server 


//         node.js 
//             react 
//                 http request 
//             node.js check logic 
//             express => api create 
//             mongodb 


//             real-time live application
//             cli-applicaiton
//             filehanding 
//             severapi
//             backendapis
            
//             javascript vs node.js 
//                 browser 
//                     window
//                     document
//                     clickable event 
//                     functionality 
//                 node 
//                     http 
//                     fs  
//                         // create
//                         // delete
//                         // update 
//                         // add 
//                     os 


//                     node -architecture  (single threaded language)
//                     v8engine 

//                     **eventloop**
//                     synchoronus and async 
//                     non-blocking i/o
//                     callstack
//                     event quque
//                     common js modules vs esmodule
//                     require               import / export  
//                     enviroment variables

//                     npm 
//                     nodemodules 
//                     eventdriven 
//                     processer 
//                     package.json , lock.json

//                     node browser 
                    
//                     npm i 
                    
//                     npm init -y

            // console.log();
            
            // node js file

            // console.log('hello namaste this is node js ');
            // console.log(5+10);
            


    




        







