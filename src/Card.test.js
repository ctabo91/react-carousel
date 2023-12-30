import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("should render without crashing", function() {
  render(<Card
            caption={TEST_IMAGES[0].caption}
            src={TEST_IMAGES[0].src}
            currNum={TEST_IMAGES[0] + 1}
            totalNum={TEST_IMAGES.length}
         />);
});

it("should match snapshot", function() {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={TEST_IMAGES[0] + 1}
      totalNum={TEST_IMAGES.length}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});