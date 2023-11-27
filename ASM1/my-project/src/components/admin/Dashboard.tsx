import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <header className="w-full h-[80px] bg-gray-100 flex justify-between items-center fixed ">
        <Header />
      </header>
      <div className="pt-[80px]">
        <aside
          id="default-sidebar"
          className="fixed top-22 left-0 z-40 w-64  h-screen transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar">
          <Aside />
        </aside>
        <main className="ml-[270px] w-[80%] ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
