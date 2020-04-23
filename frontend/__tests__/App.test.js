import React from "react";
// simulation DOM
import { shallow } from "enzyme";
import App from "../src/App";

describe("Testing App Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
