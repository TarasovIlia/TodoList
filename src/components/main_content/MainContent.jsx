import React from 'react'
import TodoList from './TodoList'
import './css/content.css'
import TodoData from './data/TodoData'



class MainContent extends React.Component {
  


    render () {

        // const todo = TodoData.map(item => <TodoList header={item.header} text={item.text} key={item.key} completed={item.completed} />)
        const todo = TodoData.map(item => <TodoList key={item.key} item={item} />)
            return (
                <div className='wrapper'>
                {todo}
                </div>
            )
    }
}

export default MainContent