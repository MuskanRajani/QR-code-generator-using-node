import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
      {
        name: 'QRcode',
        message: 'Enter QR code URL',
        type: 'input'
       }])
      .then(function(answer){
        qr.image(answer.QRcode, {type:'png'}).pipe(fs.createWriteStream('myqrcode.png'));
        fs.writeFile("URL.txt",answer.QRcode,(err)=>{
        if(err) throw err;
            console.log("the file is saved");
        })
      });
