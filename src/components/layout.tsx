import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="border border-red-500">
      <header>Headerrrr</header>
      <main className=" min-h-[100vh] container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-7">
        <div className="container mx-auto">
          <p className="text-gray-500 font-extralight text-center">
            Made by lobnor
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
