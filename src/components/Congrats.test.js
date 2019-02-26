import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeApapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeApapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});

test("renders no text when `success` prop is false", () => {});

test("renders non-empty congrats message when `success` prop is true", () => {});
