import React, { Component } from 'react';

class TodoList extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <li key={this.props.index}>{this.props.value}</li>
        );
}
}

export default TodoList;
 