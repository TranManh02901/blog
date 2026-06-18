import React from 'react';
import { act } from 'react';
import { useMemo, memo, useRef, useEffect, useState, useReducer } from 'react'
import reducer, { initState } from './reducer';
import { addJob, setJob, removeJob } from './actions';

export const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div style={{ padding: 30 }}>
            <div className='input-group'>
                <input
                    ref={inputRef}
                    className='form-control mb-3'
                    value={job}
                    placeholder='Enter...'
                    onChange={
                        e => {
                            dispatch(setJob(e.target.value))
                        }
                    }
                />
            </div>
            <button className='btn btn-primary mb-3'
                onClick={handleSubmit}>Add</button>
            <div className='mb-3'>
                <ul>
                    {jobs.map((todo_item, index) => (
                        <li key={index}>
                            {todo_item}
                            <button className='ms-3' onClick={() => dispatch(removeJob(index))}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export class Todoapp extends React.Component {
    render() {
        return (
            <Todo />
        )
    };
};