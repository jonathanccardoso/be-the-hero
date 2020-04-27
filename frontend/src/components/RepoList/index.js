import React, { useState, useEfect } from "react";

import { observable, action } from "mobx";
import { observer } from "mobx-react";

export default observer(function RepoList() {
  // const [repositories, setRepositories] = useState([]);
  // const [newRepo, setNewRepo] = useState([]);

  const repositories = observable.box("");
  const Repo = observable.box("");

  const handleSubmit = action(function (e) {
    e.preventDefault();

    setRepositories([...repositories, newRepo]);
    setNewRepo("");
  });

  const removeRepo = action(function (repo) {
    setRepositories(repositories.filter((repoItem) => repoItem !== repo));
  });

  return (
    <form data-testid="new-repo-form" onSubmit={handleSubmit}>
      <input
        data-testid="new-repo-input"
        type="text"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <button type="submit">Save</button>

      <ul>
        {repositories.map((repo) => (
          <li data-testid={repo} key={repo}>
            {repo}
            <button
              onClick={() => removeRepo(repo)}
              data-testid="remove-button"
            ></button>
          </li>
        ))}
      </ul>
    </form>
  );
});
