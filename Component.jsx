import React from 'react';

class Task extends React.Component
{
state  = {
  task:[{a: "To Do List",style:""},""] ,
  in:"",
}

addtodo()
{
    let SCopy = this.state.task;

         SCopy.push(this.state.in);
        this.setState({task: SCopy});
        this.setState({in: ""})    
}       

lineth()
{
    this.setState({style:'textDecoration="lineThrough"'});
}

    render()
    {
        return(
            <div>
                <ul>
        {this.state.task.map((todo)=> <li onClick={()=>{this.lineth()}} style={this.state.task.style} >{todo.a}</li>)}
            </ul>
            <div>
            <input value={this.state.in} type="text" onChange={(event) =>{this.setState({in : event.target.value})}}></input>
            <button onClick={()=>{this.addtodo()}}> Add</button></div>
        </div>
        )
    }
}

export default Task;