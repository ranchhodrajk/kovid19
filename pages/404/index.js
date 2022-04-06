import React from "react";
import s from '../../styles/404.module.scss';
import gifMy from '../../public/Assets/404.gif';
import Image from 'next/image';
import { useRouter } from 'next/router'

const Custome404 = () => {
    const router = useRouter()

    const onClickGoHome = () => {
        router.push('/');
    }

  return (
    <div className={s.main404}>
        <div className={s.main404Left}>
             <Image  src={gifMy} width={600} height={600}></Image>
        </div>
        <div className={s.main404Right}>
            <div className={s.text404}>404</div>
            <div className={s.desHead404}>UH OH! You're lost.</div>
            <div className={s.des404}>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</div>
            <div className={s.text404Btn}>
                <button className={s.goHome} onClick={onClickGoHome}>Go home</button>
            </div>
        </div>


    </div>
  );
};

export default Custome404;
