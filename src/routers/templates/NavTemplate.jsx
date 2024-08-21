import { Outlet } from "react-router-dom";
import Nav from "../../components/templates/Nav";

export default function NavTemplate() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
