import React from "react";
import { shallow } from "enzyme"; // simulation DOM
import Profile from "../src/pages/Profile/index";

describe("Testing Profile Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Profile incidents={5} />);

    except(wrapper).toMatchSnapshot();
    wrapper.setProps({ incidents: 10 });
    except(wrapper).toMatchSnapshot();
  });
});
