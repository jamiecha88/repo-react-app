import React, { useEffect, useState } from "react";
import CommitList from "./CommitList";

function RepositoryList({ orgName }) {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${orgName}/repos?sort=stars&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data);
        setSelectedRepo(data[0]);
      })
      .catch((error) => console.error(error));
  }, [orgName]);

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="RepositoryList">
      <h2>Repositories:</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id} onClick={() => handleRepoClick(repo)}>
            {repo.name} ({repo.language}) - {repo.stargazers_count} stars
          </li>
        ))}
      </ul>
      {selectedRepo && <CommitList repo={selectedRepo} />}
    </div>
  );
}

export default RepositoryList;




