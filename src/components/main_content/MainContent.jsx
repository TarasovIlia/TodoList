import React from 'react'
import TodoList from './TodoList'
import './css/content.css'
import TodoData from './data/TodoData'


class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todos : TodoData
        }
        this.checkedChange = this.checkedChange.bind(this)
    }
    checkedChange (id) {
        console.log("Changed", id)
    }

    render () {
        

        
        const todo = this.state.todos.map(item => <TodoList key={item.key} item={item} checkedChange={this.checkedChange}/>)
            return (
                <div className='wrapper'>
                {todo}
                </div>
            )
    }
}

export default MainContent