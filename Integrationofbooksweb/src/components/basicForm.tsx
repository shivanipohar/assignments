
import React, { Component } from 'react'

export default class basicForm extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// //import React, { Component } from 'react'
// import React, { useState } from 'react'

// // export default class BasicForm extends Component {
//      const BasicForm=()=>{
    
//     // render() {
//         const [cover,setCover]=useState("");
//         const [title,setTitle]=useState("");
//         const [author,setAuthor]=useState("");
//         const [rating,setRating]=useState("");
//         const [price,setPrice]=useState("");
        
//         const [allEntry,setAllEntry]=useState([]);

//         const submitForm=(e:any)=>{
//             e.preventDefault();
//             const newEntry={cover:cover,title:title,author:author,rating:rating,price:price};

//             // setAllEntry([...allEntry, newEntry]);

//             // console.log(allEntry);
//         }
//         return (
//            <>
//            <form action="" onSubmit={submitForm}>
//                <div>
//                    <label htmlFor="cover">Cover</label>
//                    <input type="text" name="cover" id="cover" autoComplete="off" value={cover} 
//                    onChange={(e)=>setCover(e.target.value)}></input>
                   
//                </div>

//                <div>
//                    <label htmlFor="title">Title</label>
//                    <input type="text" name="title" id="title" autoComplete="off" value={title}
//                   onChange={(e)=>setTitle(e.target.value)} ></input>
//                </div>
//                <div>
//                    <label htmlFor="author">Author</label>
//                    <input type="text" name="author" id="author" autoComplete="off" value={author}
//                    onChange={(e)=>setAuthor(e.target.value)}></input>
//                </div>
//                <div>
//                    <label htmlFor="rating">Rating</label>
//                    <input type="text" name="rating" id="rating" autoComplete="off" value={rating}
//                    onChange={(e)=>setRating(e.target.value)}></input>
//                </div>

//                <div>
//                    <label htmlFor="price">Price</label>
//                    <input type="text" name="price" id="price" autoComplete="off" value={price}
//                    onChange={(e)=>setPrice(e.target.value)}></input>
//                </div>

//                <button type="submit">submit</button>
//            </form>
//            </>
//         )
//     }
// //}


// export default BasicForm

