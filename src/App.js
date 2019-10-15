import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(
        "https://api.github.com/users/saulocastillos/repos"
      );

      const data = await response.json();

      setRepositories(data);
    }
    getRepositories();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorites(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id
        ? { ...repo, favorite: !repo.favorite }
        : { ...repo };
    });
    setRepositories(newRepositories);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite ? (
              <span
                role="img"
                aria-label="favorite"
                onClick={() => handleFavorites(repo.id)}
              >
                {" "}
                🌟{" "}
              </span>
            ) : (
              <span
                role="img"
                aria-label="shining-star"
                onClick={() => handleFavorites(repo.id)}
              >
                {" "}
                ⭐{" "}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
