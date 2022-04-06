import React,{ useEffect, useState } from "react";
import s from "../../styles/Layout.module.scss";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

import { useRouter } from "next/router";

const Layout = ({ children }) => {
  
  const router = useRouter();
  const [islog, setislog] = useState()
  
  useEffect(() => {
      const isLog = localStorage.getItem("isLogginUser");
      const isLoggin = JSON.parse(isLog);
      setislog(isLoggin);
  }, [])

  useEffect(() => {
    if(islog===false){
      router.push('signIn')
    }
  }, [islog])

  return (
    <div>
        <div className={s.mainLayout}>
          <NavBar />
            <div className={s.chlidContainer} key={Math.random()}>{children}</div>
          <Footer />
        </div>
      {/* {islog ? (
        <div className={s.mainLayout}>
          <NavBar />
          <div className={s.chlidContainer}>{children}</div>
          <Footer />
        </div>
      ) : (
        router.push("/")
      )} */}
    </div>
  );
};

export default Layout;
