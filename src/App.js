import React, { useState } from 'react';
import RepositoryList from './components/RepositoryList';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Github Repository Explorer</h1>
      <label>
        Enter an organization name:
        <input type="text" placeholder="Search for a repository" value={searchQuery} onChange={handleSearchQueryChange} />
      </label>
      <RepositoryList searchQuery={searchQuery} />
    </div>
  );
}

export default App;