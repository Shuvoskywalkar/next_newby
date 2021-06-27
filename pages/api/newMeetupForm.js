//api/newMeetupForm
//POST///api/newMeetupForm

import MongoClient from 'mongodb';

async function Handler (req,res){
    if (req.method==='POST') {
        
const data=req.body;
const{title,address,description,image}=data

   const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
   const db=client.db()
   const Collection=db.collection('meetUpsOnly');
   Collection.insertOne(data)
   .then(result=>{console.log(result);res.send(result.insertedCount>0)})
   .catch(err=>console.log(err))
   client.close();
}
}
export default Handler;