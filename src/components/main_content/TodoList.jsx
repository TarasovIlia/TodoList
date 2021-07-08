import React from 'react'




class TodoList extends React.Component {
    render() {

        return (
            <div className="TodoList">
                <div className='todoComponent'>
                    <input type="checkbox" checked={this.props.item.completed}/>
                    <p style={{display : !this.props.item.header && 'none'}}>{this.props.item.header}</p>
                    <p style={{paddingLeft : !this.props.item.header && '50px', position : !this.props.item.header && 'relative'}}>{this.props.item.text}</p>
                </div>
            </div>
        )
    }
}

export default TodoList