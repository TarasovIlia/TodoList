import React from 'react'


function TodoList (props) {
    


    return (

        <div className="TodoList">
            <div className='todoComponent'>
                <input onChange={() => props.checkedChange  (props.item.id)} type="checkbox" checked={props.item.completed}/>
                <p style={{display : !props.item.header && 'none'}}>{props.item.header} </p>
                <p style={{paddingLeft : !props.item.header && '50px', position : !props.item.header && 'relative'}}>{props.item.text}</p>
            </div>
        </div>
    )
}




export default TodoList