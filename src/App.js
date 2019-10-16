import React, { useState, useEffect } from "react";

import { Container, SearchBox, Title, Input, List, Image } from "./styles";

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("Fill with a valid username");
  const [avatar, setAvatar] = useState("./assets/avatar.jpg");

  useEffect(() => {
    async function getAvatar() {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (response.status === 200) {
        const data = await response.json();
        setMessage("");
        setAvatar(data.avatar_url);
      } else {
        setAvatar("./assets/avatar.jpg");
      }
    }
    getAvatar();
  }, [user]);

  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      if (response.status === 200) {
        const data = await response.json();
        setMessage("");
        setRepositories(data);
      } else {
        setRepositories([]);
        setMessage("Fill with a valid username");
      }
    }

    if (user !== "") {
      getRepositories();
    } else {
      setMessage("Fill with a valid username");
      setRepositories([]);
    }
  }, [user]);

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
      <Container>
        <Title>{user} github repository list</Title>
        <SearchBox>
          <Input
            onChange={e => {
              setUser(e.target.value);
            }}
            placeholder="Type a user name"
          />
          <Image src={avatar} />
        </SearchBox>

        <List>
          <ul>
            {repositories.length <= 0 ? (
              <p>{message}</p>
            ) : (
              repositories.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url}>{repo.name}</a>
                  {repo.favorite ? (
                    <span
                      role="img"
                      aria-label="favorite"
                      onClick={() => handleFavorites(repo.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      🌟{" "}
                    </span>
                  ) : (
                    <span
                      role="img"
                      aria-label="shining-star"
                      onClick={() => handleFavorites(repo.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      ⭐{" "}
                    </span>
                  )}
                </li>
              ))
            )}
          </ul>
        </List>
      </Container>
    </>
  );
}
