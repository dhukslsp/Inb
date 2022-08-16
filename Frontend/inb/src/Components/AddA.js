import React, { useContext, useState } from 'react'
import notecontext from '../Context/notes/noteContext';
import AlertComponent from './AlertComponent';
function AddA() {
    const contex = useContext(notecontext);
    const { addnote } = contex;
    const [note,setNote] = useState({title : "", description: "",tag: ""});
    const handleclick = () => {
        addnote(note.title,note.descriptio,note.tag)
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
                <button onClick={handleclick}>Add Note</button>
            </div>
        </div>
    )
}

export default AddA