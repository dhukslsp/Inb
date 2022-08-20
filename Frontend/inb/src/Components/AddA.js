import React, { useContext, useState } from 'react'
import notecontext from '../Context/notes/noteContext';
import AlertComponent from './AlertComponent';
function AddA() {
    const [note,setNote] = useState({title : "", description: "",tag: ""});
    const addnote = async (title, description, tag) => {
        // this will update entries with PUT
        const url = `http://localhost:3012/api/notes/addnote`
        const response = await fetch(url, {
          method: "post",
          mode:'cors',
          body: JSON.stringify({
            "title": "This is the new note",
            "description": "This is my descriptiond asda asdasdsas",
            "tag": "My main tag"
        }),
          headers: {
            'contentType': 'application/json',
            'auth-tocken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjOWM1NGY0ZjA2NDM5Y2M5ODVkOGZjIn0sImlhdCI6MTY2MDQ3MTUyMX0.O6UnNXQ2vTBPE0o0FRvd5HEhqx70kOQMImTtcO68T38"
          }
        })
        console.log(JSON.stringify({
            "title": "This is the new note",
            "description": "This is my descriptiond asda asdasdsas",
            "tag": "My main tag"
        }),)
        console.log(response)
      }
    const onchangehandler1 = (e) =>{
        setNote({...note,[e.target.name]:[e.target.value]})
    }
    return (
        <div>
            <AlertComponent alertitem={"This is some alert item"} />
            <div className='p-10'>
                <p className='text-xl font-extrabold' style={{ marginBottom: "2pc" }}>Create a New Note</p>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" name = "title" className="form-control" onChange={onchangehandler1} id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                    <input type="text" name = "tag" className="form-control" onChange={onchangehandler1} id="tag" />
                </div>
                <div className="mb-3">
                    <label htmFor = 'desc' htmlFor="exampleFormControlTextarea1" className="desc">Example textarea</label>
                    <textarea className="form-control" name = "description" id="exampleFormControlTextarea1" onChange={onchangehandler1} rows="3"></textarea>
                </div>
                <button onClick={addnote}>Add Note</button>
            </div>
        </div>
    )
}

export default AddA