import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generiere eine zufällige ID
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText('');
    }
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo-Liste</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button onClick={handleAddTask}>Hinzufügen</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
