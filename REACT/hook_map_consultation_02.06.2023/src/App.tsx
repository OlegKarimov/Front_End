import React, { ChangeEvent, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [newName, setNewName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);

  // newName = '10'; Нельзя напрямую менять значение состояния, полученного через hook useState()
  // setNewName('10'); Можно менять значение состояния только используя соответствуюзий метод, полученный через hook useState()

  // Атрибут onChange сработает, когда происходит Любое(!) изменение input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // При каждом изменении input перезаписывается значение newName
    setNewName(e.target.value);
  }

  const handleAddName = () => {
    if (newName.trim() !== '') {
      // setNames([''])
      // Особый синтаксис для получения нового значения массива, опирающиеся на старые данные, использует оператор spread
      setNames((prev) => [...prev, newName]);
      setNewName('');
    }
  }

  return (
    <div className="App">
      <h1 style={{ marginBottom: '50px' }}>Names App</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index + 1}>{name}</li>
        ))}
      </ul>
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          value={newName}
          placeholder='Enter a name...'
        />
        <button onClick={handleAddName}>Add name</button>
      </div>
    </div>
  );
}

export default App;