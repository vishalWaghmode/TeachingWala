// import React from 'react';
// import { TagsInput } from 'react-tag-input-component';
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'//important
import './Question.css'



function Addquestion() {
    const [selected, setSelected] = useState([]);

    return (
        <div className='add-question'>
            <div className='add-question-container'>
                <div className='head-title'>
                    <h1>Add the question</h1>
                </div>
                <div className='question-container'>
                    <div className='question-options'>
                        <div className='question-option'>
                            <div className='title'><h3>Title</h3>
                                <small>The specific and imaging you're asking a question to another person</small>
                                <input type='text' placeholder='Add Title' />
                            </div>
                        </div>
                        <div className='question-option'>
                            <div className='title'><h3>Description</h3>
                                <small>Include the detailed information someone would need to answer your question.</small>
                                <ReactQuill className='react-quill' theme='snow' />
                            </div>
                        </div>
                        <div className='question-option'>
                            <div className='title'><h3>Tags</h3>
                                <small>Add upto 5 tags to describe what your question is all about.</small>
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="Press enter to add the "
                                />
                            </div>

                        </div>
                        <div className='question-option'>
                            <div className='title'><h3>Amount</h3>
                                <small>Enter the amount you would like to pay for getting the answer.</small>
                                <input type='text' placeholder='In Rs.' />
                            </div>

                        </div>
                    </div>

                </div>
                <button className='button'>Add your question </button>
            </div>
        </div>
    )
}

export default Addquestion