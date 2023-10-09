import { render, screen } from "../../test-utils";
import Login from "../../../Routes/Login";
import { render, screen } from "../tests/test-utils";

test("should show login form", () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});
