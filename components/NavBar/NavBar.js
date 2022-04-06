import React, { useEffect, useState } from "react";
import s from "../../styles/NavBar.module.scss";
import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [islog, setislog] = useState();
  useEffect(() => {
    const isLog = localStorage.getItem("isLogginUser");
    const isLoggin = JSON.parse(isLog);
    setislog(isLoggin);
  });

  const onClickSignOut = () => {
    localStorage.removeItem("isLogginUser");
    localStorage.removeItem("UserIdUser");
    router.push("/");
  };

  return (
    <>
      <div className={s.navContainer}>
        <Row align="middle" className={s.navContainerRow}>
          <Col xs={12} md={4}>
            <Link href="/">
              <a className={s.navHead}>
                <img src="/Assets/logo-white.png" alt="" />
              </a>
            </Link>
          </Col>
          <Col xs={12} md={16}>
            <div className={s.navMenu}>
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/dashboard">Tracker</ActiveLink>
              {islog ? <ActiveLink href="/saved">Saved</ActiveLink> : ""}
              <ActiveLink href="/aboutUs">About Us</ActiveLink>
              <ActiveLink href="/contactUs">Contact Us</ActiveLink>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {islog ? (
              <div className={s.signOut}>
                <div className={s.navBtnContainer}>
                  <button className={s.signBtn} onClick={onClickSignOut}>
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className={s.navBtn}>
                <Link href="/signIn">
                  <a className={s.navBtnContainer}>
                    <button className={s.signBtn}>Sign In</button>
                  </a>
                </Link>
                <Link href="/signUp">
                  <a className={s.navBtnContainer}>
                    <button className={s.signBtn}>Sign Up</button>
                  </a>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </div>

      <div className={s.hamBurgerContainer}>
        <div className={s.hamBurgerContainerBox}>
          <div className={s.hamBurgerContainerLeft}>
            <nav role={s.navigation}>
              <div id={s.menuToggle}>
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id={s.menu}>
                  <div className={s.navMenuMob}>
                    <div className={s.activeLink}>
                      <ActiveLink href="/">Home</ActiveLink>
                    </div>
                    <div className={s.activeLink}>
                      <ActiveLink href="/dashboard">Tracker</ActiveLink>
                    </div>
                    <div className={s.activeLink}>
                      <ActiveLink href="/aboutUs">About Us</ActiveLink>
                    </div>
                    <div className={s.activeLink}>
                      <ActiveLink href="/contactUs">Contact Us</ActiveLink>
                    </div>
                    <div className={s.activeLink}>
                      <div className={s.navBtn}>
                        {islog ? (
                          <div className={s.navBtnContainer}>
                            <button
                              className={s.signBtn}
                              onClick={onClickSignOut}
                            >
                              Sign Out
                            </button>
                          </div>
                        ) : (
                          <>
                            <Link href="/signIn">
                              <a className={s.navBtnContainer}>
                                <button className={s.signBtn}>Sign In</button>
                              </a>
                            </Link>
                            <Link href="/signUp">
                              <a className={s.navBtnContainer}>
                                <button className={s.signBtn}>Sign Up</button>
                              </a>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
          <div className={s.hamBurgerContainerRight}>
            <img src="/Assets/logo-white.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
