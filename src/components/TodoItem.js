import React from 'react'
import './TodoItem.css'

import Checkbox from '@material-ui/core/Checkbox';

import { useDispatch } from 'react-redux';
import { setCheck, setRemove } from '../features/todoSlice';

function TodoItem({ name, done, id }) {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    
    const handleRemove = () => {
        dispatch(setRemove(id))
    }
    
    return (
        <div className='todoItem'>
            
            <Checkbox 
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />

            <p className={done && 'todoItem--done'}>{name}</p>
            <button onClick = {handleRemove}> Remove </button>
        </div>
    )
}

export default TodoItem