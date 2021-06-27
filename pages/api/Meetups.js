//api/Meetups
import MongoClient from 'mongodb';

async function getData(req,res){
// if (req.method==='GET') {
    
    const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
    const db=client.db()
    const Collection=db.collection('meetUpsOnly');

     Collection.find({})
    .toArray((err,documets)=>{
        res.send(documets)
        // console.log(documets)
    })
    client.close();
// }
}

export default getData;