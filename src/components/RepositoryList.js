import React, { useState, useEffect } from 'react';

function RepositoryList(props) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.github.com/orgs/Netflix/repos?sort=stars&direction=desc`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredRepositories = repositories.filter((repository) =>
    repository.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  );

  return (
    <div className="RepositoryList">
      <h2>Repositories:</h2>
      <ul>
        {filteredRepositories.map((repository) => (
          <li key={repository.id}>
            <h3>{repository.name}</h3>
            <p>Language: {repository.language}</p>
            <p>Description: {repository.description}</p>
            <p>Stars: {repository.stargazers_count}</p>
            <p>Forks: {repository.forks_count}</p>
            <p>Created At: {repository.created_at}</p>
            <button>View Commits</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;