import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="border border-red-500">
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
