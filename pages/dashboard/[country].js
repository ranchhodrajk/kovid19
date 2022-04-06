import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "../../styles/Country.module.scss";
import StatusCard from "../../components/StatusCard/StatusCard";
import LiniarGrapg from "../../components/LiniarGraph/LiniarGraph";
import { Tabs } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
import { Row, Col } from "antd";
const dashboardDetail = ({ countryData }) => {
  // const router = useRouter();
  // const { country } = router.query;

  console.log("contry", countryData);

  return (
    <div className={s.mainContainerCountry}>
      <div className={s.countryDetial}>
        <Row justify="center">
          <Col xs={20}>
            {/* <div className={s.countryDetialFlag}>
              <img src={`https://countryflagsapi.com/png/India`} alt="" />
            </div> */}
            <div className={s.countryDetialFlag}>{countryData[0]?.Country}</div>
            <Row gutter={20}>
              <Col md={8} xs={24}>
                <StatusCard head="Confirmed" total={countryData[0]?.Confirmed} newCase="12313" />
              </Col>
              <Col md={8} xs={24}>
                <StatusCard
                  head="Deaths"
                  total={countryData[0]?.Deaths}
                  newCase="12313"
                  colorClass={"myProBgTomato"}
                />
              </Col>
              <Col md={8} xs={24}>
                <StatusCard
                  head="Active"
                  total={countryData[0]?.Active}
                  newCase="32302"
                  colorClass={"myProBgGreen"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={s.countryChartCointainer}>
        <Row justify="center">
          <Col xs={20}>
            <div className={s.countryChartBox}>
              <div className={s.countryChartBoxHead}>
                <div className={s.countryChartBoxHeadTop}>
                  ENTIRE COVID-19 DATA
                </div>
                <div className={s.countryChartBoxHeadBot}>
                  Graphical data presentation
                </div>
                <div className={s.countryChartBoxHeadDes}>
                  It improves the way of your analyzing and learning entire data
                  of covid-19 in just quick and the graphical representation
                  makes the data easy to understand.
                </div>
              </div>

              <div className={s.countryChart}>
                <Tabs>
                  <TabPane
                    tab={
                      <span>
                        <CheckCircleOutlined />
                        Confirmed Cases
                      </span>
                    }
                    key="1"
                  >
                    <LiniarGrapg type="Confirmed" country={countryData[0]?.CountryCode} />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <HistoryOutlined />
                        Recovered Cases
                      </span>
                    }
                    key="2"
                  >
                    <LiniarGrapg type="Recovered" country={countryData[0]?.CountryCode} />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <CloseCircleOutlined />
                        Deaths Cases
                      </span>
                    }
                    key="3"
                  >
                    <LiniarGrapg type="Deaths" country={countryData[0]?.CountryCode} />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default dashboardDetail;
export async function getServerSideProps(context) {
  console.log(context.query);
  const { country } = context.query;
  // const { param } = context.query;
  // console.log('country params',param)
  const timeStamp = new Date().getTime();
  const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
  const yesterdayDate = new Date(yesterdayTimeStamp);
  const Year = yesterdayDate.getFullYear();
  const day = yesterdayDate.getDate();
  const Month = yesterdayDate.getMonth() + 1;

  const response = await fetch(
    `https://api.covid19api.com/live/country/${country}/status/confirmed/date/${Year}-${Month}-${day}`
  );
  const SendData = await response.json();
  return {
    props: {
      countryData: SendData,
    },
  };
}
