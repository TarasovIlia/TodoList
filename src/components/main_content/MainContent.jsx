import React from 'react'
import TodoList from './TodoList'
import './css/content.css'
// import todoData from './data/todo'

const todoData = [
    {
    id: 1,
    text: "Take out the trash",
    header : 'trash',
    completed: true
    },
    {
    id: 2,
    text: "Grocery shopping",
    header : 'shopping',
    completed: false
    },
    {
    id: 3,
    text: "Clean gecko tank",
    completed: false
    },
    {
    id: 4,
    text: "Mow lawn",
    completed: true
    },
    {
    id: 5,
    text: "Catch up on Arrested Development",completed: false
    }
    ]
    



function MainContent () {

// const todo = todoData.map(item => <TodoList header={item.header} text={item.text} key={item.key} completed={item.completed} />)
const todo = todoData.map(item => <TodoList key={item.key} item={item} />)
    return (
        <div className='wrapper'>
           {todo}
        </div>
    )
}

export default MainContent