import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "../../styles/AboutUs.module.scss";
import { Row, Col } from "antd";
import { Card } from "antd";
const about = () => {
  const { Meta } = Card;

  // const router = useRouter();
  // const [islog, setislog] = useState(true);

  // useEffect(() => {
  //   const isLog = localStorage.getItem("isLogginUser");
  //   const isLoggin = JSON.parse(isLog);
  //   setislog(isLoggin);
  // }, []);

  // useEffect(() => {
  //   if (islog === false || islog === undefined || islog === null) {
  //     router.push("signIn");
  //   }
  // }, [islog]);

  return (
    <div className={s.mainAboutCointainer}>
      <div className={s.colorLine}>
        <div className={s.usImg}>
          <Row >
            <Col xs={24} md={12} lg={6} >
              <div className="myAboutCard">
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="/Assets/Head4.png"
                    height='185px'
                    width='185px'
                  />
                }
              >
                <Meta
                  title="Alvero moreno"
                  description="CEO, Founder"
                />
              </Card>
              </div>
            </Col>
            <Col xs={24} md={12} lg={6} >
              <div className="myAboutCard">
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="/Assets/Head5.png"
                    height='185px'
                    width='185px'
                  />
                }
              >
                <Meta
                  title="Licaa Jhon"
                  description="HR Expert"
                />
              </Card>
              </div>
            </Col>
            <Col xs={24} md={12} lg={6} >
              <div className="myAboutCard">
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="/Assets/headshot-3.jpg"
                    height='185px'
                    width='185px'
                  />
                }
              >
                <Meta
                  title="Kevin Pitter"
                  description="Senior Teamlead"
                />
              </Card>
              </div>
            </Col>
            <Col xs={24} md={12} lg={6} >
              <div className="myAboutCard">
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="/Assets/Head3.png"
                    height='185px'
                    width='185px'
                  />
                }
              >
                <Meta
                  title="Christin Walter"
                  description="Managing Director"
                />
              </Card>
              </div>
            </Col>
          </Row>

          {/* <img src="/Assets/aboutImg.jpg" alt="" height="300px" width="500px" /> */}
        </div>
        <div className={s.usDetail}>
          <div className={s.usDetailLeft}>
            <div className={s.usDetailLeftHead}>About Us</div>
          </div>
        </div>
      </div>
      <div className={s.bottomDetail}>
        <Row>
          <Col xs={24} lg={12} className={s.usDetailLeftDes}>
            <div>
              Some centennial enterprises have pages of content that can fit in
              this section, while startups can tell the story of how the company
              was born, its challenges, and its vision for the future.
            </div>
            <div>
              You don’t need to outright say, “our mission is safe everyone,”
              but you should convey the mission of your business in your About
              Us copy. This is key for attracting talent, as well as leads that
              have Corporate Social Responsibility (CSR) goals.
            </div>
            <div>
              Reviews, client logos, case studies, and results bring consistency
              to your About Us page. It’s what really proves what you are saying
              is real and the impact you can bring to future clients.
            </div>
            <div>
              Here is a man with great respect for wood and handcrafted
              sculptures that “tell a story and testify to the richness of one
              of our most precious resources.”His website is light, easy to
              read, and filled with inspiring quotes and photos of his labors of
              love.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia quam beatae magnam facilis neque dolorem praesentium
              asperiores excepturi blanditiis.beatae magnam facilis neque
              dolorem praesentium asperiores excepturi blanditiis.
            </div>
          </Col>
          <Col xs={24} lg={12} className={s.usDetailRightDes}>
            <div className={s.rightStat}>
              <Row>
                <Col xs={24} md={12}>
                  <div className={s.staticBox}>
                    <div className={s.staticBoxHead}>12,121</div>
                    <div className={s.staticBoxDes}>Our Projects</div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={s.staticBox}>
                    <div className={s.staticBoxHead}>123</div>
                    <div className={s.staticBoxDes}>Our Team</div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={s.staticBox}>
                    <div className={s.staticBoxHead}>32,123</div>
                    <div className={s.staticBoxDes}>Our Clients</div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={s.staticBox}>
                    <div className={s.staticBoxHead}>59 </div>
                    <div className={s.staticBoxDes}>Our Experience</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default about;
