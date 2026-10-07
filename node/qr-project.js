// import inquirer from "inquirer";
// import qr from 'qr-image'
// import fs from 'fs'

// inquirer.prompt([
//     {
//         message:'Enter u site address',
//         name :'url'
//     }
// ]).then((answer)=>{
//     let url = answer.url
//     let qr_img = qr.image(url)
//     qr_img.pipe(fs.createWriteStream('achiever.png'))
// })