import logo from "../assets/images/logo.svg";
import x from "../assets/images/x.svg";
import chevronR from "../assets/images/chevronR.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleMenu } from "../store/uiSlice";
import { MenuItem } from "./Header";
import Anchor from "./Anchor";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

interface MobileMenuProps {
  menu: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu }) => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector<RootState, boolean>(
    (state) => state.ui.menuIsOpen
  );
  const { unlock } = useBodyScrollLock();

  const handleMenuClose = () => {
    dispatch(toggleMenu());
    unlock();
  };

  return (
    <ul className={`menu ${menuIsOpen ? "shown" : "hidden"}`}>
      <li className="top_menu_item">
        <a className="logo" href="/">
          <img src={logo} alt="логотип сайта" />
          <p>testLab</p>
        </a>
        <div className="menu_button" onClick={handleMenuClose}>
          {menuIsOpen && <img className="close" src={x} alt="закрыть меню" />}
        </div>
      </li>
      {menu.map((item, index) => (
        <Anchor url={item.url} key={index} onClick={handleMenuClose}>
          <li className="regular_menu_item">
            {item.name}
            <img className="chevron" src={chevronR} alt="стрелка вправо" />
          </li>
        </Anchor>
      ))}
    </ul>
  );
};

export default MobileMenu;
