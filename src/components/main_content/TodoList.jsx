import React from 'react'


function TodoList (props) {
    


    return (

        <div className="TodoList">
            <div style={{ opacity : props.item.completed && '0.5'}} className='todoComponent'>
                <input onChange={() => props.checkedChange  (props.item.id)} type="checkbox" checked={props.item.completed}/>
                <p style={{display : !props.item.header && 'none',  textDecorationLine : props.item.completed && 'line-through'}}>{props.item.header} </p>
                <p style={{left : !props.item.header && '120px', textDecorationLine : props.item.completed && 'line-through'}}>{props.item.text}</p>
            </div>
        </div>
    )
}




export default TodoList