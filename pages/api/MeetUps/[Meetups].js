//api/Meetups
import MongoClient from 'mongodb';
import {useRouter}  from "next/router";

async function getData(req,res){
// if (req.method==='POST') {
    const router=useRouter()
    console.log(router.query.Meetups)
    console.log(req.query)
    const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
    const db=client.db()
    const Collection=db.collection('meetUpsOnly');

     Collection.find({_id:req.params.Meetups})
    .toArray((err,documets)=>{
        
        res.send(documets)
        console.log(documets)
    })
    client.close();
// }
}

export default getData;