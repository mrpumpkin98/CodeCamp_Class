import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);
  const myText = screen.getByText("찰스 13세 입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("찰스의 취미 입력하기 :");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("찰스랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
