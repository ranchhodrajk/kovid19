import React, { useEffect, useState } from "react";
import s from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Card } from "antd";

import { useRouter } from "next/router";
import { Row, Col, Button } from "antd";
import {
  ArrowRightOutlined,
  DoubleRightOutlined,
  InfoCircleFilled,
  QuestionCircleOutlined,
  SafetyCertificateFilled,
  SwapRightOutlined,
} from "@ant-design/icons";
import StatusCard from "../components/StatusCard/StatusCard";
import { Container } from "postcss";
import ColumnGraph from "../components/ColumnGraph/ColumnGraph";

export default function Home({ data }) {
  console.log("objectData", data);
  const { Meta } = Card;

  // const router = useRouter();
  // const [islog, setislog] = useState(true);
  const [global, setglobal] = useState(data?.Global);
  const [globalObj, setglobalObj] = useState({});

  useEffect(() => {
    // const isLog = localStorage.getItem("isLogginUser");
    // const isLoggin = JSON.parse(isLog);
    // setislog(isLoggin);

    console.log("global", global);

    const globalCaseObj = {
      Confirm: global.TotalConfirmed,
      Deaths: global.TotalDeaths,
      Recovered: global.TotalRecovered,
    };
    setglobalObj(globalCaseObj);
  }, []);

  // useEffect(() => {
  //   console.log("islog", islog);
  //   if (islog === false || islog === undefined || islog === null) {
  //     router.push("signIn");
  //   }
  // }, [islog]);

  return (
    <div className={s.mainContainerHome}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={s.topContainer}
        style={{ backgroundImage: "url(/Assets/coronaBackground1.jpg)" }}
      >
        <Row justify="center">
          <Col xs={20}>
            <Row className={s.upperMainRow}>
              <Col xs={24} md={12} className={s.upperLeft}>
                <div className={s.upperLeftHead}>
                  <div className={s.upperLeftHeadCorona}>CORONA</div>
                  <div className={s.upperLeftHeadCoronaRight}>
                    <div className={s.upperLeftHeadCoronaRightTop}>
                      COVID-19
                    </div>
                    <div className={s.upperLeftHeadCoronaRightBottom}>
                      VIRUS
                    </div>
                  </div>
                </div>
                <div className={s.upperLeftDes}>
                  The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
                  China in December 2019, the outbreak was later recognized as a
                  pandemic by the World Health Organization (WHO) on 11 March
                  2020.
                </div>
                <div className={s.upperLeftBtn}>
                  <Row justify='center'>
                    <Col xs={24} md={8} className={s.btnCol}>
                      <Button
                        type="primary"
                        shape="round"
                        icon={<SafetyCertificateFilled />}
                        style={{ fontSize: "16px" }}
                        size="large"
                      >
                        How to Protect
                      </Button>
                    </Col>
                    <Col xs={24} md={8}  className={s.btnCol}>
                      <Button
                        type="link"
                        shape="round"
                        icon={<DoubleRightOutlined />}
                        style={{ fontSize: "16px" }}
                        size="large"
                      >
                        About covid 19
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <img
                  src="/Assets/homeTopRight.png"
                  alt="Picture of the author"
                  className={s.mainRightImg}
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className={s.chartContainer}>
        <Row justify="center">
          <Col xs={20}>
            <div className={s.spredContainerHead}>
              WORLD WIDE COVID-19 CASES
            </div>
            <div className={s.spredContainerBig}>TOTAL NUMBER OF CASES</div>
            <div className={s.chartBoxContainer}>
              <Row gutter={36}>
                <Col xs={24} md={12}>
                  <div className={s.chartBox}>
                    <ColumnGraph globalData={globalObj} />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={s.chartSideDes}>
                    <div className={s.chartSideDesBox}>
                      Coronavirus disease (COVID-19) is an infectious disease
                      caused by the SARS-CoV-2 virus.Most people who fall sick
                      with COVID-19 will experience mild to moderate symptoms
                      and recover without special treatment. However, some will
                      become seriously ill and require medical attention.
                    </div>
                    <div className={s.chartSideDesBox}>
                      The virus can spread from an infected person’s mouth or
                      nose in small liquid particles when they cough, sneeze,
                      speak, sing or breathe. These particles range from larger
                      respiratory droplets to smaller aerosols.
                    </div>
                    <div className={s.chartSideDesBox}>
                      You can be infected by breathing in the virus if you are
                      near someone who has COVID-19, or by touching a
                      contaminated surface and then your eyes, nose or mouth.
                      The virus spreads more easily indoors and in crowded
                      settings.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className={s.spredContainer}>
        <Row justify="center">
          <Col xs={20}>
            <div className={s.spredContainerHead}>
              HOW CORONAVIRUS IS SPREAD
            </div>
            <div className={s.spredContainerBig}>TRANSMISSION OF COVID-19</div>
            <div className={s.spredContainerDes}>
              Because it's a new illness, we do not know exactly how coronavirus
              spreads from person to person. Similar viruses are spread in cough
              droplets.
            </div>
            <div className={s.spredContainerCard}>
              <Row gutter={32}>
                <Col xs={24} md={8}>
                  <Card
                    className={s.spredCard}
                    cover={
                      <img alt="spredCard1" src="/Assets/spredCard1.png" />
                    }
                  >
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Person-to-person spread as close contact with infected
                      </div>
                      <div className={s.spredCradDetailDes}>
                        The coronavirus is thought to spread mainly from person
                        to person. This can happen between people who are in
                        close contact with one another.
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    className={s.spredCard}
                    cover={
                      <img alt="spredCard2" src="/Assets/spredCard2.png" />
                    }
                  >
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Touching or contact with infected surfaces or objects
                      </div>
                      <div className={s.spredCradDetailDes}>
                        A person can get COVID-19 by touching a surface or
                        object that has the virus on it and then touching their
                        own mouth, nose, or possibly their eyes.
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    className={s.spredCard}
                    cover={
                      <img alt="spredCard3" src="/Assets/spredCard3.png" />
                    }
                  >
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Droplets that from infected person coughs or sneezes
                      </div>
                      <div className={s.spredCradDetailDes}>
                        The coronavirus is thought to spread mainly from person
                        to person. This can happen between people who are in
                        close contact with one another.
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row justify="center">
                <div className={s.spredBtnContainer}>
                  <Button
                    className={s.spredBtn}
                    type="primary"
                    shape="round"
                    icon={<QuestionCircleOutlined />}
                    size="large"
                  >
                    Question about spreading?
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className={s.washContainer} style={{backgroundImage:'url(/Assets/shape-z.jpg)'}}>
        <div className={s.washBgImgContiner}>
          {/* <img src="/Assets/shape-b.png" className={s.washBgImg} alt="" /> */}
          <div className={s.washDetailContainer}>
            <Row justify="center">
              <Col xs={20}>
                <div className={s.washHead}>Follow steps to wash hands</div>
                <div className={s.washSubHead}>How do I need wash hand</div>
                <div className={s.washCardContainer}>
                  <Row gutter={16}>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-a.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Soap on Hand</div>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-b.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Palm to Palm</div>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-c.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Between Fingers</div>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-d.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Back to Hands</div>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-e.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Clean with Water</div>
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className={s.washCard}>
                        <div className={s.washCardImg}>
                          <img
                            src="/Assets/hand-f.png"
                            alt=""
                            className={s.CardImg}
                          />
                        </div>
                        <div className={s.washCardHead}>Focus on Wrist</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={s.symptemsContainer}>
        <Row justify="center">
          <Col xs={20}>
            <div className={s.spredContainerHead}>
              WHAT ARE THE SYMPTOMS OF COVID-19?
            </div>
            <div className={s.spredContainerBig}>SYMPTOMS OF CORONAVIRUS</div>
            <div className={s.spredContainerDes}>
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. These symptoms are usually
              mild and begin gradually. Also the symptoms may appear 2-14 days
              after exposure.
            </div>
            <div className={s.spredContainerCard}>
              <Row gutter={32}>
                <Col xs={24} md={8}>
                  <Card className={s.spredCard}>
                    <img
                      src="/Assets/symptom-a.png"
                      alt="symptom"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>Fever</div>
                      <div className={s.spredCradDetailDes}>
                        <strong>High Fever</strong> – this means you feel hot to
                        touch on your chest or back (you do not need to measure
                        your temperature). It is a common sign and also may
                        appear in 2-10 days if you affected.
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className={s.spredCard}>
                    <img
                      src="/Assets/symptom-b.png"
                      alt="symptom"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>Cough</div>
                      <div className={s.spredCradDetailDes}>
                        <strong>Continuous cough</strong> – this means coughing
                        a lot for more than an hour, or 3 or more coughing
                        episodes in 24 hours (if you usually have a cough, it
                        may be worse than usual).
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className={s.spredCard}>
                    <img
                      src="/Assets/symptom-c.png"
                      alt="symptom"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Shortness of breath
                      </div>
                      <div className={s.spredCradDetailDes}>
                        <strong>Difficulty breathing</strong> – Around 1 out of
                        every 6 people who gets COVID-19 becomes seriously ill
                        and develops difficulty breathing or shortness of
                        breath.
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row className={s.askQueSymptemsContainer}>
                <Col md={2} className={s.askQueSymptemsIcon}>
                  <InfoCircleFilled className={s.infoIcon} />
                </Col>
                <Col md={16} className={s.askQueSymptemsDes}>
                  <span
                    style={{
                      color: "#2a81ea",
                      fontStyle: "normal",
                      fontWeight: "bold",
                    }}
                  >
                    Stay at home and call your doctor:
                  </span>{" "}
                  If you think you have been exposed to COVID-19 and develop a
                  fever and any symptoms, such as cough or difficulty breathing,
                  call your healthcare provider as soon as possible for medical
                  advice.
                </Col>
                <Col md={6} className={s.spredBtnContainer}>
                  <Button
                    className={s.spredBtn}
                    type="primary"
                    shape="round"
                    icon={<QuestionCircleOutlined />}
                    size="large"
                  >
                    Question about symptoms?
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className={s.preventionContainer}>
        <Row justify="center">
          <Col xs={20}>
            <div className={s.spredContainerHead}>HOW TO PROTECT YOURSELF?</div>
            <div className={s.spredContainerBig}>PREVENTION & ADVICE</div>
            <div className={s.spredContainerDes}>
              There is currently no vaccine to prevent coronavirus disease 2019
              (COVID-19).
              <strong>
                {" "}
                The best way to prevent illness is to avoid being exposed to
                this virus.
              </strong>{" "}
              Stay aware of the latest information on the COVID-19 outbreak,
              available on the WHO website and through your national and local
              public health authority.
            </div>
            <div className={s.spredContainerCard}>
              <Row gutter={32}>
                <Col xs={24} md={12} lg={6}>
                  <div className={s.spredCard}>
                    <img
                      alt="spredCard1"
                      src="/Assets/advice-a.png"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Wash your hands frequently
                      </div>
                      <div className={s.spredCradDetailDes}>
                        Regularly and thoroughly clean your hands with an
                        alcohol-based hand rub or wash them with soap and water
                        for at least 20 seconds.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                  <div className={s.spredCard}>
                    <img
                      alt="spredCard1"
                      src="/Assets/advice-b.png"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Maintain social distancing
                      </div>
                      <div className={s.spredCradDetailDes}>
                        Maintain at least 1 metre (3 feet) distance between
                        yourself & anyone who is coughing or sneezing. If you
                        are too close, get chance to infected.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                  <div className={s.spredCard}>
                    <img
                      alt="spredCard1"
                      src="/Assets/advice-c.png"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Avoid touching face
                      </div>
                      <div className={s.spredCradDetailDes}>
                        Hands touch many surfaces and can pick up viruses. So,
                        hands can transfer the virus to your eyes, nose or mouth
                        and can make you sick.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                  <div className={s.spredCard}>
                    <img
                      alt="spredCard1"
                      src="/Assets/advice-a.png"
                      className={s.symptomCardImg}
                    />
                    <div className={s.spredCradDetail}>
                      <div className={s.spredCradDetailHead}>
                        Practice respiratory hygiene
                      </div>
                      <div className={s.spredCradDetailDes}>
                        Maintain good respiratory hygiene as covering your mouth
                        & nose with your bent elbow or tissue when cough or
                        sneeze.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await fetch("https://api.covid19api.com/summary");
  const SendData = await response.json();
  return {
    props: {
      data: SendData,
    },
  };
}