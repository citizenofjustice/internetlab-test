import menu from "../assets/images/menu.svg";
import logo from "../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/uiSlice";
import MobileMenu from "./MobileMenu";

export interface MenuItem {
  name: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { name: "Как это работает", url: "" },
  { name: "3-й блок", url: "" },
  { name: "Вопросы и ответы", url: "" },
  { name: "Форма", url: "" },
];

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <ul className="menu">
        <li className="top_menu_item">
          <a className="logo" href="/">
            <img src={logo} alt="логотип сайта" />
            <p>testLab</p>
          </a>
          <div className="menu_button" onClick={() => dispatch(toggleMenu())}>
            <img className="open" src={menu} alt="открыть меню" />
          </div>
        </li>
      </ul>
      <MobileMenu menu={menuItems}></MobileMenu>
    </header>
  );
};

export default Header;
