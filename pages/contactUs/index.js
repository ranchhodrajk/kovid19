import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Button } from "antd";
import { Input } from "antd";
import s from "../../styles/ContactUs.module.scss";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const contact = () => {
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
    <div
      className={s.mainContactUsContainer}
      style={{ backgroundImage: "url(/Assets/contactUsBg9.jpg)" }}
    >
      <Row justify="center" className={s.formRow}>
        <Col xs={20}>
          <div className={s.contactFormContainer}>
            <Row>
              <Col xs={24} lg={10}>
                <div className={s.formContact}>
                  {/* <div className={s.head}>Contact Us</div> */}
                  <div className={s.form}>
                    <Row gutter={20} className={s.fromRow}>
                      <Col xs={24} lg={12} className="myInput">
                        <Input
                          placeholder="First name"
                          prefix={<EditOutlined />}
                        />
                      </Col>
                      <Col xs={24} lg={12} className="myInput">
                        <Input
                          placeholder="Last name"
                          prefix={<EditOutlined />}
                        />
                      </Col>
                    </Row>
                    <Row gutter={20} className={s.fromRow}>
                      <Col xs={24} className="myInput">
                        <Input placeholder="Email" prefix={<MailOutlined />} />
                      </Col>
                    </Row>
                    <Row gutter={20} className={s.fromRow}>
                      <Col xs={24} className="myInput">
                        <Input
                          placeholder="Contact number"
                          prefix={<PhoneOutlined />}
                        />
                      </Col>
                    </Row>
                    <Row gutter={20} className={s.fromRow}>
                      <Col xs={24} className="myInput">
                        <TextArea
                          placeholder="Message"
                          autoSize={{ minRows: 6 }}
                        />
                      </Col>
                    </Row>
                    <Row gutter={20} className={s.fromRow}>
                      <Col xs={24} className="myInput">
                        <Button type="primary" block>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default contact;
