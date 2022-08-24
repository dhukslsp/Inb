import React from 'react'

function Editnote(props) {
    return (
        <div>
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" style={{ "display": "none" }} data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <input type="text" name="title" className="form-control" value={note.title} onChange={onchangehandler1} id="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                                    <input type="text" name="tag" className="form-control" value={note.tag} onChange={onchangehandler1} id="tag" />
                                </div>
                                <div className="mb-3">
                                    <label htmFor='desc' htmlFor="exampleFormControlTextarea1" className="desc">Example textarea</label>
                                    <textarea className="form-control" name="description" value={note.description} id="exampleFormControlTextarea1" onChange={onchangehandler1} rows="3"></textarea>
                                </div>
                                <button>Add Note</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { Edit_note(note.title[0], note.description[0], note.tag[0]) }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Editnote