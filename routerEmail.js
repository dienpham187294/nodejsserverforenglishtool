// const express = require("express");
// const router = express.Router();
// const fs = require('file-system');
const nodemailer = require("nodemailer");



function EmailRouter(router, jsonParser) {
    router.post("/mailRq", jsonParser, (req, res) => {
        let getDate = Date.now()
        let n = getDate.toString().slice(9, 13)
        sendmail(req.body.getEmail, n, 0)
        res.send({ "success": true, "code": n }).status(200);
    });

}


module.exports = { EmailRouter }

// import { connectToDatabase } from '../../../util/mongodb'

// import Linkapi from '../../../util/api/Linkapi';
// import { async } from 'regenerator-runtime';
// export default async (req, res) => {
//     const { mail, n } = req.query;
//     const { method } = req.query;
//     const { db } = await connectToDatabase();



//     try {
//         // sendmail(mail)
//         const data = await db.collection("users").find({ mail: mail }).toArray();
//         if (data.length === 0) {
//             await db.collection("users").insertOne({
//                 mail: mail,
//                 password: mail,
//                 expired: Date.now() + 15 * 24 * 60 * 60,
//                 buycode: ""
//             })
//             const data1 = await db.collection("users").find({ mail: mail }).toArray();
//             sendmail(mail, n, 0);
//             setTimeout(() => {
//                 res.status(200).json({ success: true, data: data1 });
//             }, 3000)

//         } else {
//             sendmail(mail, n, 0);
//             setTimeout(() => {
//                 res.status(200).json({ success: true, data: data });
//             }, 3000)

//         }

//     } catch (error) {
//         res.status(400).json({ success: false });
//     }

// }


async function sendmail(mail, n, i) {

    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dienpham187294@gmail.com',
            pass: 'rqccbitaohabcrzv'
        }
    });

    let mailOptions = await {
        from: 'dienpham187294@gmail.com',
        to: mail,
        subject: 'Cộng đồng thực hành tiếng anh MIỄN PHÍ - eFishEnglish',
        html: `<div  style="width:500px; text-align:center; border: 1px solid green; border-radius:5px">
            <h3>Cộng đồng thực hành tiếng anh Miễn phí - eFishEnglish</h3>
            <hr/>
            <h1>Mã xác thực</h1>
            <h1>`+ n + `</h1>
            <hr/>
            <a href="https://www.eFishEnglish.com/">eFishEnglish.com</a>
            
    </div >`
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            if (i === 0) {
                setTimeout(() => {
                    sendmail(mail, n, 1)
                }, 2000)
            }
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
