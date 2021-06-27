import React from 'react';

const ContctForm = (props) => {
//   var btn =documents.getElementById("feedback-body__submit");

//     (function () {
//     btn.onclick = function(e) {
//         e.preventDefault()
//     }
//  })()
 const Post={
 title:"",
 address:"",
 description:"",
 image:""
 };
const onchanger=(e)=>{
  // const post={...Post}

 Post[e.target.name]=e.target.value;
//  console.log(e.target.value)

}
const{addMeetupHandler}=props;
// console.log(props)
// const Post={Name:Name,Mail:Email,Messege:Messege}
const addMeetupHandle=()=>{
  // console.log("huuuu");
  addMeetupHandler(Post);

}
    return (
        <div className="Body">
        <div className="feedback-card">
  <div className="feedback-header">
    SEND FEEDBACK
  </div>
  <div className="feedback-body">
  <input onBlur={onchanger} name="image" style={{marginBottom:"5px"}}  type="text" className="feedback-body__email" placeholder="URL to Picture" />
    <input onBlur={onchanger} name="address" style={{marginBottom:"5px"}}  type="text" className="feedback-body__email" placeholder="Title" />
    <input onBlur={onchanger} name="title" type="text" className="feedback-body__email" placeholder="Adress" />
    <textarea onBlur={onchanger} name="description" type="text" className="feedback-body__message" placeholder="Description">
        </textarea><button 
        onClick={addMeetupHandle} 
        id="feedback-body__submit">SEND</button>
  </div>
</div>
</div>
    );
};

export default ContctForm;