import { CloseRounded } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./navAssets/Navsmall.css";

function Navsmall( {closeMenu}) {
  const navigate = useNavigate();

  return (
    <ul className="navsmall">
      <div onClick={closeMenu} className="navsmall__close-menu">
        <CloseRounded />
      </div>
      <li className="navsmall--item" onClick={() => {
        navigate("/")
        closeMenu()}}>
        Home
      </li>
      <li className="navsmall--item" onClick={() => {
        navigate("/practice-blog")
        closeMenu()}}>
        Practice Blog
      </li>
      <li className="navsmall--item" onClick={() => {
        navigate("/projects")
        closeMenu()}}>
        Projects
      </li>
      <li className="navsmall--item" onClick={() => {
        navigate("/about-contact")
        closeMenu()
        }}>
        About-Contact
      </li>
    </ul>
  );
}

export default Navsmall;
