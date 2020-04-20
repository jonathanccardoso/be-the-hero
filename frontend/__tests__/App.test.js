import React from "react";
import { shallow } from "enzyme"; // simulation DOM
import App from "../src/App";

describe("Testing App Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <App />
    );

    except(wrapper).toMatchSnapshot(); // to record test
  });
});
