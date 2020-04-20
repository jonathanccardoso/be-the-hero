import React from "react";

import { fireEvent, render, waitForElement } from "@testing-library/react";

import Logon from "../src/pages/Logon/index";

describe("Testing Logon Component", () => {
  it("should Logon correctly", async () => {
    const { getByTestId, getByText } = render(<Logon />);
    const fieldNode = await waitForElement(() => getByTestId("form-field"));
    const newLogon = "testing";
    fireEvent.change(fieldNode, { target: { value: newLogon } });
    expect(fieldNode.value).toEqual(newLogon);

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)

    const tdNode = await waitForElement(
      () => getByText(newLogon)
    )
    expect(tdNode).toBeDefined()
  });
});
