/** Tests for Card Component */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", () => {
  render(<Card />);
});

it("has correct src, caption, currNum, and totalNum", () => {
  const { debug, container } = render(
    <Card caption="testCaption" src="testSrc" currNum="2" totalNum="5" />
  );
  // query tags
  const smallHTML = container.querySelector(".Card-small");
  const cardTitleHTML = container.querySelector(".Card-title");
  const imgHTML = container.querySelector(".Card-image");
  const caption = imgHTML.getAttribute("alt");
  const src = imgHTML.getAttribute("src");
  const smallText = smallHTML.textContent;
  const cardTitle = cardTitleHTML.textContent;

  expect(caption).toEqual("testCaption");
  expect(src).toEqual("testSrc");
  expect(smallText).toContain("2");
  expect(cardTitle).toEqual("testCaption");
  expect(smallText).toContain("5");
});

it("mathces snapshots", () => {
  const { container, debug } = render(<Card />);
  expect(container).toMatchSnapshot();
});

//TODO: test interactions with Carousel
