import { render, screen } from "../tests/test-utils";
import Home from "../../src/pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DetailCard from "../Components/DetailCard/DetailCard";
import ScheduleForm from "../Components/ScheduleForm/ScheduleForm";

describe("Navbar", () => {
  it("should render correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("DH Odonto")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("should render correctly", () => {
    render(<Footer />);
  });
});

describe("Home", () => {
  it("should render correctly", () => {
    render(<Home />);
  });
});

describe("DetailCard", () => {
  it("should render correctly", () => {
    render(<DetailCard />);
  });
});

describe("ScheduleForm", () => {
  it("should render correctly", () => {
    render(<ScheduleForm />);
  });
});
