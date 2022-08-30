import React, { useState } from 'react'
import Notecontext from './noteContext'
function NoteState(props) {
  const host = "http://localhost:3012"
  const notestate = []
  const [mynote, setnotes] = useState(notestate);

  var loginJwt = localStorage.getItem("tocken");
  //  get All Notes
  const fetchallnotes = async () => {
    const response = await fetch(`${host}/api/notes/Fetchallnotes`, {
      method: 'GET',
      headers: {
        'contentType': 'application/json',
        'auth-tocken': loginJwt,
      },
    })
    const newjson = await response.json()
    setnotes(newjson);
    //Logic for editing for the client
  }
  //LOGGING in the website
  // Add Note
  //Delete Note
  const deleteNote = async (key) => {
    // to do API call
    console.log("deleting note with if " + key);
    const newnotes = mynote.filter((mynote) => { return mynote._id !== key })
    setnotes(newnotes)
    //Making a API call
    const response = await fetch(`${host}/api/notes/deletenote/${key}`, {
      method: 'DELETE',
      headers: {
        'contentType': 'application/json',
        'auth-tocken': loginJwt,
      },
    })
    console.log(response)
  }
  return (
    <Notecontext.Provider value={{ fetchallnotes, mynote, setnotes, deleteNote,loginJwt }}>
      {props.children}
    </Notecontext.Provider>
  )
}
export default NoteState