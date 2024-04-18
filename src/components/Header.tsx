import menu from "../assets/images/menu.svg";
import logo from "../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/uiSlice";
import MobileMenu from "./MobileMenu";
import Anchor from "./Anchor";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

export interface MenuItem {
  name: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { name: "Как это работает", url: "how-it-works" },
  { name: "3-й блок", url: "third-block" },
  { name: "Вопросы и ответы", url: "questions" },
  { name: "Форма", url: "contact-form" },
];

const Header = () => {
  const dispatch = useDispatch();
  const { lock } = useBodyScrollLock();

  const handleMenuOpen = () => {
    dispatch(toggleMenu());
    lock();
  };

  return (
    <header className="header">
      <div className="menu">
        <span className="top_menu_item">
          <a className="logo" href="/">
            <img src={logo} alt="логотип сайта" />
            <p>testLab</p>
          </a>
          <div className="menu_button" onClick={handleMenuOpen}>
            <img className="open" src={menu} alt="открыть меню" />
          </div>
        </span>
        <ul className="menu_desktop">
          {menuItems.map((item, index) => (
            <Anchor linkClass="regular_menu_item" key={index} url={item.url}>
              <li>{item.name}</li>
            </Anchor>
          ))}
        </ul>
      </div>
      <MobileMenu menu={menuItems}></MobileMenu>
    </header>
  );
};

export default Header;
