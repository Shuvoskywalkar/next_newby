
import {useRouter}  from "next/router";
import Image from 'next/image'; 
const Home = (props) => {
    const{meetups}=props;
    // console.log(meetups)
    const router=useRouter()

const gotoDetails=(id)=>{
    router.push("/"+id);
    // console.log(id)
}
    return (
        <div >
                    {meetups.map(mu=>
<div key={mu._id} className="HomeDecor">
            <img className="imaage"  src={mu.image} alt="nai re vai"/>
            <h4>{mu.title}</h4>
            <h2>{mu.address}</h2>
            <div className="display-flex" >
                <small>{mu._id}</small>
                <br/>
                <h5>{mu.description}</h5>
            </div>
            <button type="submit" onClick={()=>gotoDetails(mu._id)} className="button">Fix Meeting</button> 
            </div>)}
        </div>
    );
};

export default Home;