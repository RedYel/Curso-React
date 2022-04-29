import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en HookApp", () => {
  test("Debe mostarse correctamente", () => {
      const wrapper = shallow(<HookApp/>);
      expect(wrapper).toMatchSnapshot();
  });
});
