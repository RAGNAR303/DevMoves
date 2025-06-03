/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default DefaultLayout;
