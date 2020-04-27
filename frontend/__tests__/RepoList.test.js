import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import RepoList from "../src/components/RepoList/index.js";

test("must be possible adds news repositories", () => {
  const { container, getByTestId } = render(<RepoList />);

  const input = getByTestId("new-repo-input");
  const form = getByTestId("new-repo-form");

  fireEvent.change(input, { target: { value: "ReactJS" } });
  fireEvent.submit(form);

  expect(!!getByTestId("ReactJS")).toBe(true);
  console.log(container.innerHTML);
});

test("must be remove item on list repositories", () => {
  const { getByTestId } = render(<RepoList />);

  const input = getByTestId("new-repo-input");
  const form = getByTestId("new-repo-form");

  fireEvent.change(input, { target: { value: "ReactJS" } });
  fireEvent.submit(form);

  const button = getByTestId("remove-button");

  fireEvent.click(button);

  // waitForElementToBeRemoved(() => {
  //   expect(!!getByTestId("ReactJS")).toBe(false);
  // });

  expect(!!getByTestId("ReactJS")).toBe(false);
});
