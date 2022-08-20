import React, { useState } from 'react'
import Notecontext from './noteContext'
function NoteState(props) {
  const host = "http://localhost:3012"
  const notestate = []
  const [mynote, setnotes] = useState(notestate);
  //Get all notes
  //Add note
  const fetchallnotes = async () => {
    const response = await fetch(`${host}/api/notes/Fetchallnotes`, {
      method: 'GET',
      headers: {
        'contentType': 'application/json',
        'auth-tocken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjOWM1NGY0ZjA2NDM5Y2M5ODVkOGZjIn0sImlhdCI6MTY2MDQ3MTUyMX0.O6UnNXQ2vTBPE0o0FRvd5HEhqx70kOQMImTtcO68T38",
      },
    })
    const newjson = await response.json()
    setnotes(newjson);
    //Logic for editing for the client
  }
  //LOGGING in the website
  // Add Note
  const addnote = async (title, description, tag) => {
    // this will update entries with PUT
    const url = `${host}/api/notes/addnote`
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
    console.log(response)
  }
  //get note
  // const editNote = async (id, title, description, tag) => {
  //   // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'contentType': 'application/json',
  //   //     'auth-tocken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  //   //   },
  //   //   body: JSON.stringify(title, description, tag)
  //   // })

  //   //Logic for editing for the client
  //   for (let index = 0; index < mynote.length; index++) {
  //     const element = mynote[index];
  //     if (element._id === id) {
  //       element.title = title;
  //       element.description = description;
  //       element.tag = tag;
  //     }
  //   }
  // }
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
        'auth-tocken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjOWM1NGY0ZjA2NDM5Y2M5ODVkOGZjIn0sImlhdCI6MTY1NzQzNDA0MH0.RwWyPTRKKFShEQZ-m_BpKxHeVzUlceeQko892mRVHy4",
      },
    })
    console.log(response)
  }
  return (
    <Notecontext.Provider value={{ fetchallnotes, mynote, setnotes, addnote, deleteNote }}>
      {props.children}
    </Notecontext.Provider>
  )
}
export default NoteState