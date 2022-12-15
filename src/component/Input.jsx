import React from 'react'
import { useState } from 'react';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';

const Input = (prop) => {
    // currnote=event.target.value;
    let [note, setNotes] = useState([]);
    let [currnote, setCurrnote] = useState('');
    function updateNote(event) {
        let newnote = event.target.value
        setCurrnote(newnote);
    }
    function addnote(event) {
        let newnoteArray = [...note, currnote];
        setNotes(newnoteArray);
    }
    function Delete(ele, index) {
        // console.log(`delete func ${index} and element is ${ele}`);
        let notes = note;
        notes.splice(index, 1);
        setNotes([...notes]);
    }
    return(
        <>
            <div className="con">
                <div className="header">
                    {prop.heading}
                </div>
                <div className="in">
                    <input placeholder='Enter Your task' onChange={updateNote} type="text" />
                    <button onClick={addnote} >
                        <FaPlus />
                    </button>
                </div>
                <div className="list">
                    <ul>
                        {
                            note.map((ele, index) => {
                                return (
                                    <li key={index}>
                                        {ele}
                                        <button className='delete' onClick={() => Delete(index)}>
                                            <FaRegTrashAlt />
                                        </button>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>

                </div>
            </div>
        </>
    )
}
export default Input