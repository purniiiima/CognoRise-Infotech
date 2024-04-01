import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    category: '',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.name || !newTask.description || !newTask.category || !newTask.deadline) {
      alert('Please fill in all fields');
      return;
    }
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTask({
      name: '',
      description: '',
      category: '',
      deadline: ''
    });
  };

  const handleDelete = (index) => {
    setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="What to do"
          value={newTask.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Where to do"
          value={newTask.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Why to do"
          value={newTask.category}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          value={newTask.deadline}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
        
      </form>
      <ul>
      {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span>{task.name}</span> - <span>{task.description}</span> - <span>{task.category}</span> - <span>{task.deadline}
            <button className='delete' onClick={() => handleDelete(index)}>Delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
