import React from 'react';
import TodoList from './TodoList'

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      items: [],
      search: [],
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
    if (this.state.item.trim().length >= 1) {
      this.setState({
        items: [...this.state.items, this.state.item],
        item: ''
      })
    }
  }

  checkInput = (e) => {
    let search = e.target.value;
    let filteredSearch=[];
    if (search.length >= 1){
      let compare = new RegExp(search, 'i');
      filteredSearch = this.state.items.filter((value) => {
        return compare.test(value)
      })
    }
    this.setState({
      search: filteredSearch
    });
  }

  removeItem = (i) => {
    let filteredState = this.state.items.filter((value, index) => {
        return index != i; 
    })     
    this.setState({
      items: filteredState
    }) 
  }

  edit = (i) => {
    console.log(i);
    this.removeItem(i);
    let arr = this.state.items[i];
    console.log(arr);
    this.setState({
  item: this.state.items[i]
    })
  }  

  render() {
    return(
      <div className="todo-list">
        <p>Todo List</p>
        <input type="text" placeholder="Search" onChange={this.checkInput} style={{width: 80 + '%'}}></input>
          <ul>
          {this.state.search.map(
            (value,index) => {
              return <TodoList value ={value} index={index}/>
            //return (<li key={index}><span className="item">{value}</span></li>
            
          })
        }
        <form>
          {/* <input type="text" placeholder="Search" onChange={this.checkInput} style={{width: 80 + '%'}}></input>
          <ul>
          {this.state.search.map(
            (value,index) => {
              return <TodoList value ={value} index={index}/>
            //return (<li key={index}><span className="item">{value}</span></li>
            
          })
        } */}
        </ul>
        </form>
        <form onSubmit={this.addItem}>
        <input placeholder="Enter Task" value={this.state.item} onChange={this.inputChange}/>
        <button type="submit" > Add Task </button>
        </form>
        <ul>
          {this.state.items.map(
            (value,index) => {
            return (<li key={index}><span className="item">{value}</span><span className="icon"><button type="submit" onClick={() => this.edit(index)}></button></span><span className="icon"><button type="submit" onClick={() => this.removeItem(index)} style={{border: 'none', background:'red', width: 100 + '%', fontSize: 10}}> Remove Task </button> </span></li>)
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
