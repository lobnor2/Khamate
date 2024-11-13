import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="border border-red-500">
      <Header />
      <main className="border border-blue-500 min-h-screen container mx-auto py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-7">
        <div className="container mx-auto">
          <p className="text-gray-500 font-light text-center">Made by lobnor</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
