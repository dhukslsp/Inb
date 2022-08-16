import React,{useContext,useEffect} from 'react'
import notecontext from '../Context/notes/noteContext'
import NoteCard from './NoteCard';
import AddA from './AddA';
export default function Home() {
  const first = useContext(notecontext)
  const {fetchallnotes,mynote} = first;
  useEffect(() => {
    fetchallnotes()
  }, [])
  
  return (
    <div>
      <AddA/>
      <div className='p-10' style={{"paddingTop":"0px"}}>
        <p className='text-xl font-extrabold' style={{ marginBottom: "2pc" }}>Your All Notes</p>
        {mynote.map((note)=>{return <NoteCard id = {note._id} title = {note.title} key = {note._id} mydesc = {note.description}/>})}
      </div>
    </div>
  )
}
