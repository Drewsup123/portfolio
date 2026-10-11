import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("react-tilt", () => ({
  Tilt: ({ children }) => <div>{children}</div>,
}));

jest.mock("./components/canvas/Stars", () => () => (
  <canvas data-testid="stars-canvas" />
));

jest.mock("./components/canvas/Earth", () => () => (
  <canvas data-testid="earth-canvas" />
));

jest.mock("./components/HeroBgAnimation", () => () => (
  <div data-testid="hero-bg-animation" />
));

jest.mock("./components/lanyard/lanyard.component", () => () => (
  <canvas data-testid="lanyard-canvas" />
));

describe("modern portfolio redesign", () => {
  test("renders Drew as a React-focused product engineer", () => {
    const { container } = render(<App />);

    expect(
      screen.getByRole("heading", { name: /react product engineer/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Drew Johnson/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /view resume/i })).toHaveAttribute(
      "href",
      expect.stringContaining("docs.google.com")
    );
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });

  test("renders the primary portfolio sections and calls to action", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /skills/i })).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /featured projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /work together/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });

  test("renders React skills and featured projects from portfolio data", () => {
    render(<App />);

    const skills = screen.getByRole("region", { name: /skills/i });
    expect(within(skills).getAllByText(/React/i).length).toBeGreaterThan(0);
    expect(within(skills).getByText(/React Query/i)).toBeInTheDocument();
    expect(within(skills).getByText(/Component Systems/i)).toBeInTheDocument();

    const projects = screen.getByRole("region", { name: /featured projects/i });
    expect(within(projects).getByText(/AI Image Tools/i)).toBeInTheDocument();
    expect(within(projects).getByText(/Channel Program/i)).toBeInTheDocument();
  });
});
