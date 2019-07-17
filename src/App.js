import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      items: []
    }
    this.addItem = this.addItem.bind(this);
  }

  inputChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  addItem = (e) => {
    e.preventDefault();
    if (this.state.item && this.state.item.length >= 1) {
      this.setState({
        items: [this.state.item, ...this.state.items],
        item: ''
      })
    }
  }

  removeItem = (i) => {
    let filteredState = this.state.items.filter((value, index) => {
        return index != i; 
    })     
    this.setState({
      items: filteredState
    }) 
  }

  render() {
    console.log(this.state.item);
    return(
      <div className="todo-list">
        <p>Todo List</p>
        <form onSubmit={this.addItem}>
        <input placeholder="Enter Task" value={this.state.item} onChange={this.inputChange}/>
        <button type="submit" > Add Task </button>
        </form>
        <ul>
          {this.state.items.map(
            (value,index) => {
            return (<li key={index}><span className="item">{value}</span><span className="icon"><button type="submit" onClick={() => this.removeItem(index)} style={{border: 'none', background:'#f5f', width: 100 + '%', fontSize: 10}}> Remove Task </button> </span></li>)
          })
        }
        </ul>
      </div>
    )
  }
}


function App() {
  return (
    <Todo />
  );
}

export default App;
