import MongoClient,{ObjectId} from 'mongodb';
import { useRouter } from 'next/router';



async function deletor(req,res){
    if (req.method === 'DELETE') {
   const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
   const db=client.db()
   const Collection=db.collection('meetUpsOnly');

   const deletedItem= await Collection.deleteOne({_id:ObjectId(req.body)})

   res.send(deletedItem.deletedCount>0)
   client.close();

}
 else {
console.log('ki jani ki hoitese')      }
;
}

export default deletor;