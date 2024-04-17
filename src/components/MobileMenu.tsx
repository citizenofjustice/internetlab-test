import logo from "../assets/images/logo.svg";
import x from "../assets/images/x.svg";
import chevronR from "../assets/images/chevronR.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleMenu } from "../store/uiSlice";
import { MenuItem } from "./Header";

interface MobileMenuProps {
  menu: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu }) => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector<RootState, boolean>(
    (state) => state.ui.menuIsOpen
  );

  return (
    <ul className={`menu ${menuIsOpen ? "shown" : "hidden"}`}>
      <li className="top_menu_item">
        <a className="logo" href="/">
          <img src={logo} alt="логотип сайта" />
          <p>testLab</p>
        </a>
        <div className="menu_button" onClick={() => dispatch(toggleMenu())}>
          {menuIsOpen && <img className="close" src={x} alt="закрыть меню" />}
        </div>
      </li>
      {menu.map((item, index) => (
        <li className="regular_menu_item" key={index}>
          {item.name}
          <img className="chevron" src={chevronR} alt="стрелка вправо" />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
