import React from "react";
import s from "../../styles/Footer.module.scss";

import { Row, Col } from "antd";
import {
  GoogleOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={s.mainFooter}>
      <Row justify="center">
        <Col xs={20}>
          <div className={s.upperFooter}>
            <Row gutter={4}>
              <Col md={9} xs={24}>
                <div className={s.footerLogo}>
                  <img src="/Assets/logo-white.png" alt="logo" />
                </div>
                <div className={s.footerDes}>
                  <div className={s.footerDesup}>
                    This website is for health information and advice about
                    coronavirus (COVID-19), how to prevent and protect yourself
                    from disease.
                  </div>
                  <div className={s.footerDesdown}>
                    Learn about the government response to coronavirus on
                    GOV.UK.
                  </div>
                </div>
                <div className={s.footerSocIconContainer}>
                  <GoogleOutlined className={s.footerSocIcon} />
                  <YoutubeOutlined className={s.footerSocIcon} />
                  <TwitterOutlined className={s.footerSocIcon} />
                </div>
              </Col>
              <Col md={4} xs={8}>
                <div className={s.useLink}>
                  <div className={s.footerColHead}>QUICK LINK</div>
                  <a>Symptoms</a>
                  <a>Prevention</a>
                  <a>Protect Youself</a>
                  <a>FAQs</a>
                  <a>About Corona</a>
                </div>
              </Col>
              <Col md={6} xs={8}>
                <div className={s.useLink}>
                  <div className={s.footerColHead}>HELPFULL LINK</div>
                  <a>Healthcare Professionals</a>
                  <a>Healthcare Facilities</a>
                  <a>Older Adults & Medical Conditions</a>
                  <a>Repare your Family</a>
                </div>
              </Col>
              <Col md={5} xs={8}>
                <div className={s.useLink}>
                  <div className={s.footerColHead}>IMPORTANT LINK</div>
                  <a>WHO Website</a>
                  <a>CDC Website</a>
                  <a>NHS Website</a>
                  <a>Harvard Health</a>
                </div>
              </Col>
            </Row>
          </div>
          <div className={s.lowerFooter}>
            <div className={s.lowerFooterCopy}>
              <div className={s.lowerFooterCopyRight}>
                &copy; 2020 KOVID-19. Template Made by WebMobtech.
              </div>
              <a className={s.lowerFooterCopyLeft}>Privacy Policy</a>
            </div>
            <div className={s.lowerFooterDes}>
              Disclaimer: We hope you find the information presented on this
              website useful. This website is for general information and raise
              awareness of (2019-nCoV) only. All the information based on WHO,
              NHS and CDC website. Information on our website is meant for
              awareness, if you have any doubt please verify from respective
              site.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
