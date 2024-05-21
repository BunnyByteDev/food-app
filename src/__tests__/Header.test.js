import { BrowserRouter } from "react-router-dom";
import Header from "../components/Main/Header/Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/redux/reduxStore";

test("Should load Header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const logoElement = screen.getByText(/Food App/i);
  expect(logoElement).toBeInTheDocument();
});
