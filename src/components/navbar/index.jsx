import { Link } from "react-router-dom";
import "./style.scss";
import React from "react";
import { Button, Drawer } from "@material-tailwind/react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="container-navbar">
      <div className="nav">
        <div className="logo">
          <img src="/navbar.png" draggable={"false"} alt="" />
          <h1>Typer</h1>
        </div>

        <ul className="ul">
          <Link to={'/'}>
            <li>
              <i class="fa-solid fa-keyboard"></i>
            </li>
          </Link>
          <Link to={'/about'}>
          <li>
            <i class="fa-solid fa-info"></i>
          </li>
          </Link>
          <Link to={''}>
          <li>
            <i class="fa-solid fa-gear"></i>
          </li>
          </Link>
        </ul>

        <div className="rooms">
          <button className="join">JOIN</button>
          <button className="create">CREATE</button>
        </div>

        <React.Fragment>
      <Button className="smallBtn" onClick={openDrawer}><i class='fa-solid fa-bars'></i></Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4 drawer">
      <div className="small">
      <ul className="ul small">
          <Link to={'/'}>
            <li>
              <i class="fa-solid fa-keyboard"></i>
            </li>
          </Link>
          <Link to={'/about'}>
          <li>
            <i class="fa-solid fa-info"></i>
          </li>
          </Link>
          <Link to={''}>
          <li>
            <i class="fa-solid fa-gear"></i>
          </li>
          </Link>
        </ul>

        <div className="rooms small">
          <button className="join">JOIN</button>
          <button className="create">CREATE</button>
        </div>
      </div>
      </Drawer>
    </React.Fragment>
      </div>
    </div>
  );
}
