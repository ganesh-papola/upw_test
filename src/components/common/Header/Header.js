//libs
import React, { useRef, useState } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";

//helpers
import { useDetectClickOutside } from "src/hooks/useDetectClickOutside";

//files
import { signOut } from "src/redux/actions";

//styles
import S from "./Header.styles.module.scss";

//constants
import { PageTitles, STRINGS } from "src/shared/constants";
import { Icomoon } from "src/assets/icons";



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const handleMenu = () => setShowMenu(!showMenu);
  const handleOutsideClick = () => {
    setTimeout(() => {
      showMenu && handleMenu();
    }, 0);
  };
  const headerRef = useRef(null);
  useDetectClickOutside(headerRef, handleOutsideClick);

  const onSignOut = () => {
    dispatch(signOut())
  }
  return (
    <header className={cx(S.header)}>
      <div className={S.headerHead}>
        <span className={S.headerHeadTitle}>{PageTitles.DASHBOARD}</span>
        <div className={cx(S.headerHeadMenu)} ref={headerRef}>
          <Icomoon
            className={cx(S.headerHeadMenuIcon)}
            icon={"menu"}
            color="#fff"
            onClick={handleMenu}
          />
        </div>
      </div>
      <div className={cx(S.headerTabs, { [S.headerTabsVisible]: showMenu })}>
        <div className={cx(S.headerTabsGroup, S.headerTabsLeft)}>
          <div className={S.headerTabsGroupItems}>{STRINGS.ABOUT}</div>
        </div>

        <div className={cx(S.headerTabsGroup, S.headerTabsRight)}>
          <div onClick={onSignOut} className={S.headerTabsGroupItems}>{STRINGS.SIGNOUT}</div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
