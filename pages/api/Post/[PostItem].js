import { MongoClient,ObjectId } from "mongodb";
// import router, {useRouter}  from "next/router";
// const router=useRouter()
// console.log(router.query.PostItem)

async function PostingSuccess(req,res){
    // console.log(router.query.PostItem);
    // console.log(req.body.id)  

if (req.method==='PATCH') {
const{image,address,title,id,description}=req.body;
console.log(id)
    const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
    const db=client.db()
    const Collection=db.collection('meetUpsOnly');
//   const updated = await 
  
  Collection.updateOne({_id:ObjectId(id)},{$set:{image:image,title:title,address:address,description:description}})
//   const response=await res.send(updated);
.then(result=>{res.send(result)})
.catch(err=>{res.send(err)})
}
 else{console.log('wtf is happeing')}
}

export default PostingSuccess;