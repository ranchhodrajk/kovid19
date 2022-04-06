import React, { useEffect, useState } from "react";
import s from "../../styles/Saved.module.scss";
import { Row, Col, Empty, Button } from "antd";
import StatusCard from "../../components/StatusCard/StatusCard";
import Link from "next/link";

import { SafetyCertificateOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const index = ({ data }) => {
  const router = useRouter();

  const [addFavData, setaddFavData] = useState();
  const [getUserId, setgetUserId] = useState();
  const [countryData, setcountryData] = useState();
  const [islog, setislog] = useState(true);

  useEffect(() => {
    setcountryData(data.Countries);

    const isLog = localStorage.getItem("isLogginUser");
    const isLoggin = JSON.parse(isLog);
    setislog(isLoggin);

    const getLocalUserId = localStorage.getItem("UserIdUser");
    const getUserIdData = JSON.parse(getLocalUserId);
    setgetUserId(getUserIdData);

    const getLocalFavData = localStorage.getItem("favCountryData");
    const getFavData = JSON.parse(getLocalFavData);

    const getUserCountryData = getFavData?.find(
      (val) => val.userId == getUserIdData
    );

    setaddFavData(getUserCountryData);
  }, []);

  useEffect(() => {
    if (islog === false || islog === undefined || islog === null) {
      router.push("signIn");
    }
  }, [islog]);

  useEffect(() => {
    console.log("addFavData", addFavData);
  }, [addFavData]);

  useEffect(() => {
    console.log("countryData", countryData);
  }, [countryData]);

  const onClickUnsave = (countryCode) => {

    const getLocalFavData = localStorage.getItem("favCountryData");
    const getFavData = JSON.parse(getLocalFavData);

    const userIndx = getFavData.findIndex(function (ele) {
      return ele.userId === getUserId;
    });

    const temp = [...addFavData.favCountryCode];
    const countryIndx = temp.findIndex(function (ele) {
      return ele === countryCode;
    });

    temp.splice(countryIndx, 1);

    getFavData[userIndx].favCountryCode = temp;

    const getUserCountryData = getFavData.find(
      (val) => val.userId == getUserId
    );

    localStorage.setItem("favCountryData", JSON.stringify(getFavData));
    setaddFavData(getUserCountryData);
  };

  return (
    <div className={s.mainSavedContainer}>
      <div className={s.dashboardMarky}>
        <marquee width="100%" direction="left" height="20px">
          <div className={s.markSub}>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              Get vaccinated as soon as it’s your turn.
            </div>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              Keep physical distance of at least 1 metre from others.
            </div>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              Wear a properly fitted mask.
            </div>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              Clean your hands frequently with alcohol-based hand rub or soap
              and water.
            </div>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              If you develop symptoms or test positive for COVID-19,
              self-isolate until you recover.
            </div>
            <div>
              <SafetyCertificateOutlined style={{ marginRight: "5px" }} />
              This data is updated on {data.Date}
            </div>
          </div>
        </marquee>
      </div>
      <div
        className={s.countryDetial}
        style={{ backgroundImage: "url(/Assets/coronaBackground1.jpg)" }}
      >
        {addFavData?.favCountryCode?.length != 0 ? (
          addFavData?.favCountryCode?.map((item) => {
            let getCountryCase = countryData.find(
              (val) => val.CountryCode == item
            );
            return (
              <Row justify="center" key={item} className={s.saveRow}>
                <Col xs={20} className={s.saveCol}>
                  <div className={s.countryDetialFlag}>
                    <div className={s.countryFlagName}>
                      <Link href={`/dashboard/${item}`}>
                        <a>{getCountryCase.Country}</a>
                      </Link>
                    </div>
                    <div className={s.countryFlagRemove}>
                      <button onClick={() => onClickUnsave(item)}>
                        Unsave
                      </button>
                    </div>
                  </div>

                  <Row gutter={20}>
                    <Col md={8} xs={24}>
                      <StatusCard
                        head="Confirmed"
                        total={getCountryCase.TotalConfirmed}
                        newCase={getCountryCase.NewConfirmed}
                      />
                    </Col>
                    <Col md={8} xs={24}>
                      <StatusCard
                        head="Deaths"
                        total={getCountryCase.TotalDeaths}
                        newCase={getCountryCase.NewDeaths}
                        colorClass={"myProBgTomato"}
                      />
                    </Col>
                    <Col md={8} xs={24}>
                      <StatusCard
                        head="Recovered"
                        total={getCountryCase.TotalRecovered}
                        newCase={getCountryCase.NewRecovered}
                        colorClass={"myProBgGreen"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })
        ) : (
          <div>
            <Empty />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const response = await fetch("https://api.covid19api.com/summary");
  const SendData = await response.json();
  return {
    props: {
      data: SendData,
    },
  };
}
