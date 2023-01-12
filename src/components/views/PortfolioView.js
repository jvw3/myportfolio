import { Home } from "../portfoliosections/Home";
import { Route, Routes, Outlet } from "react-router-dom"



export const PortfolioView = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />

            <Outlet />
          </>
        }
      ></Route>
    </Routes>
  );
};
