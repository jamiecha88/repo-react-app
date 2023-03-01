import React, { useEffect, useState } from "react";

function CommitList({ repo }) {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo.full_name}/commits`)
      .then((res) => res.json())
      .then((data) => {
        setCommits(data);
      })
      .catch((error) => console.error(error));
  }, [repo]);

  return (
    <div className="CommitList">
      <h2>Commits for {repo.name}:</h2>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            <strong>{commit.commit.author.name}</strong> -{" "}
            <a href={commit.html_url} target="_blank" rel="noreferrer">
              {commit.commit.message}
            </a>{" "}
            ({commit.sha.substr(0, 7)}) -{" "}
            {new Date(commit.commit.author.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommitList;