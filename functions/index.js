const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express');
const bodyParser = require('body-parser')
const utility = require('./utility')
const app = express();

const sendEmail = utility.sendEmail

admin.initializeApp()
app.use(bodyParser.json())
// TODO: Add protection on the API

const cors = (request, response, next) => {
    response.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });

    // intercept OPTIONS method
    if(request.method === 'OPTIONS') {
        response.send(200);
    } else {
        next();
    }
}

app.use(cors)
const db = admin.firestore()

app.post("/contact", async (req, res)=>{
    const data = req.body
    if(data && data['name'] && data['email'] && data['message']){
        
        // First check if email is blacklisted or not.
        // Using Async Await instead of Promise Hell
        try {
            const blacklistDoc = await db.collection('blacklist').doc('blacklist').get() 
            // Doc will always exist
            const blacklistList = blacklistDoc.data()['data']
            // Check if Email is BlackListed or not
            if(blacklistList.includes(data['email'])){
                res.json({data:null, err:"Email Blacklisted"})
            }
            else{
                // Not Blacklisted, send the emails
                const info1 = await sendEmail(data)
                // Send Email to me
                const info2 = await sendEmail(data, true)
                
                // Now add the details in the database
                const resID = await db.collection('contacts').add(data)

                res.json({err:null, data:resID.id})
            }
        } catch (error) {
            functions.logger.warn(error, {structuredData:true})
            res.json({data:null, err:"Something went wrong"})
        }
    }
    else{
        functions.logger.info(data, {structuredData:true})
        res.json({data:null, err:"Invalid use of API"})
    }
})
app.post("/blacklist", (req, res)=>{
    const data = req.body
    console.log(data)
    if(data && data['email']){
        db.collection('blacklist').doc('blacklist')
        .update({
            data : admin.firestore.FieldValue.arrayUnion(data['email'])
        })
        .then(()=>{
            res.json({err:null, data:"Success"})
        })
        .catch((err)=>{
            functions.logger.warn(err)
            res.json({err:"Something went Wrong", data:null})
        })
    }
    else{
        functions.logger.info("Invalid Use of API")
        functions.logger.info(data, {structuredData:true})
        res.json({data:null, err:"Invalid use of API"})
    }
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addEmail = functions.https.onRequest((req, res)=>{
    res.json({data:null, err:"API not in use"})

})

exports.addMessage = functions.https.onRequest((req, res)=>{
    res.json({data:null, err:"API not in use"})

})

exports.api = functions.https.onRequest(app);