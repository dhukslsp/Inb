import React, { useContext, useEffect, useRef, useState } from 'react'
import notecontext from '../Context/notes/noteContext'
import NoteCard from './NoteCard';
import AddA from './AddA';
export default function Home() {
  const [note, setNote] = useState({id:"", title: "", description: "", tag: "" });
  //Onchanging of the update note textbox
  const onchangehandler1 = (e) => {
    setNote({ ...note, [e.target.name]: [e.target.value] })
  }
  const first = useContext(notecontext)
  const { fetchallnotes, mynote ,setnotes} = first; //Fetchig data from usecontext
  const updateNote = (id, title, description, tag) => {
    setNote({id: id, title: title, description: description, tag: tag })
    console.log(note.id)
    ref.current.click()
  }
  const editnote = async (id, title, description, tag) => {
    console.log(title);
    const url = 'http://localhost:3012/api/notes/updatenote/' +id;
    const response = await fetch(url, {
      method: 'put',
      mode:'cors',
      body: JSON.stringify({title:title,description:description,tag:tag}),
      headers: {
        'content-Type': 'application/json',
        'auth-tocken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjOWM1NGY0ZjA2NDM5Y2M5ODVkOGZjIn0sImlhdCI6MTY2MDQ3MTUyMX0.O6UnNXQ2vTBPE0o0FRvd5HEhqx70kOQMImTtcO68T38",
      }
    })
    console.log(response);
  }  
  const executingEditNote = ()=>{

  }
  //Function for saving teh changes in the library
  const ref = useRef();
  const clickref = useRef();
  const closeRef = useRef();
  useEffect(() => {
    fetchallnotes();
  })
  
  return (
    <div>
      <AddA />
      <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" style={{ "display": "none" }} data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit The Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='p-10'>
                <p className='text-xl font-extrabold' style={{ marginBottom: "2pc" }}>Create a New Note</p>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                  <input type="text" name="title" className="form-control" ref = {clickref} value={note.title} onChange={onchangehandler1} id="title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                  <input type="text" name="tag" className="form-control" value={note.tag} onChange={onchangehandler1} id="tag" />
                </div>
                <div className="mb-3">
                  <label htmFor='desc' htmlFor="exampleFormControlTextarea1" className="desc">Example textarea</label>
                  <textarea className="form-control" name="description" value={note.description} id="exampleFormControlTextarea1" onChange={onchangehandler1} rows="3"></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref = {closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={()=>{
                editnote(note.id,note.title[0],note.description[0],note.tag[0])
              }
              } type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10' style={{ "paddingTop": "0px" }}>
        <p className='text-xl font-extrabold' style={{ marginBottom: "2pc" }}>Your All Notes</p>
        {mynote.map((note) => { return <NoteCard update={updateNote} tag={note.tag} id={note._id} title={note.title} key={note._id} mydesc={note.description} /> })}
      </div>
    </div>
  )
}
