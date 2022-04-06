import React from "react";
import { Progress } from "antd";
import s from "../../styles/StatusCard.module.scss";
import { CaretUpOutlined } from "@ant-design/icons";
const StatusCard = ({ head, total, newCase, colorClass }) => {

  const formmater = (x) => {
    x=x?.toString();
    var lastThree = x?.substring(x.length-3);
    var otherNumbers = x?.substring(0,x.length-3);
    if(otherNumbers != ''){
      lastThree = ',' + lastThree;
    }
    return otherNumbers?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  } 
  const worldPopulation = 7895669000;
  let percent = (total * 100)/worldPopulation
  // console.log('percent',percent)

  return (
    <div
      className={s.mainContainerStatus}
      style={{ backgroundImage: "url(/Assets/coronaCardBg.jpg)" }}
    >
      <div className={s.ProgressBox}>
        <Progress className={`${s.Progress} ${colorClass}`} percent={70} showInfo={false} />
      </div>
      <div className={s.ProgressDetail}>
        <div className={s.ProgressDetailHead}>{head} </div>

        <div className={s.ProgressDetailCount}>
          <div className={s.ProgressDetailLabel}>Total cases</div>
          {/* <div className={s.ProgressDetailNum}>{total}</div> */}
          <div className={s.ProgressDetailNum}>{formmater(total)}</div>

        </div>
        <div className={s.ProgressDetailNew}>
          <div className={s.ProgressDetailLabel}>
            {" "}
            <CaretUpOutlined style={{ color: "green" }} /> New cases{" "}
          </div>
          <div className={s.ProgressDetailNum}>{formmater(newCase)}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
