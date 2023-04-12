import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className={`h-screen w-screen flex flex-col ${props.className}`}>
      <Header />

      <main className="flex flex-grow  w-11/12 mx-auto relative ">
        {props.children}
      </main>
      <Footer />
    </div>
    // <main className="w-screen h-screen bg-gradient-to-tl from-gray-600 to-blue-950 flex-col justify-between">
    //   <header className="flex  drop-shadow-2xl  w-full h-auto p-10 justify-between items-center bg-[rgba(0,0,0,0.2)]">
    //     <h1>Header</h1>
    //   </header>
    //   <div>{props.children}</div>
    //   <footer className="flex w-full p-10 justify-between bg-gray-50  self-end items-end">
    //     {" "}
    //     <h1>footer</h1>
    //   </footer>
    // </main>
  );
};

export default Layout;
