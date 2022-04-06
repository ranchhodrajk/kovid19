import React, { useEffect, useState } from "react";
import s from "../../styles/SignIn.module.scss";
import "../../styles/SignIn.module.scss";
import Link from "next/link";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
const signIn = () => {
  const router = useRouter();
  const [localRegData, setlocalRegData] = useState([]);
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [loginErr, setloginErr] = useState("");

  useEffect(() => {
    let registrationData = localStorage.getItem("registerUser");
    let registerData = JSON.parse(registrationData);
    setlocalRegData(registerData);
  }, []);

  const onFinish = (values) => {
    console.log("localRegData", localRegData);
    const indx = localRegData.findIndex((item) => item.email === values.email);
    console.log("index", indx);
    if (indx < 0) {
      if (values.email !== "" && values.password !== "") {
        setloginErr("Your email is not registered");
      } else {
        setloginErr("");
      }
    } else {
      if (
        values.email === localRegData[indx].email &&
        values.password === localRegData[indx].password
      ) {
        localStorage.setItem("isLogginUser", JSON.stringify(true));
        localStorage.setItem('UserIdUser', JSON.stringify(localRegData[indx].id))
        setloginErr("");
        router.push("/");
        console.log("Success:", values);
      } else {
        setloginErr("Your email and password are not correct");
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={s.mainSignIn}>
      <Row className={s.mainRow}>
        <Col
          lg={{ offset: 8, span: 8 }}
          // md={{ offset: 4, span: 16 }}
          className={s.colRight}
        >
          <div className={s.form}>
            {/* <div className={s.formHeadtext}>Sign in</div> */}
            <div className={s.symbol}>
              <img src="/Assets/logoBlue.png" height="64px" width="74px" />
            </div>
            <Form
              className={s.cust}
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                className="rmPadding error-min-height"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                  {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                ]}
              >
                <Input
                  focus={true}
                  style={{ padding: "6px", borderRadius: "4px" }}
                  prefix={
                    <UserOutlined
                      className="site-form-item-icon"
                      style={{ color: "grey", marginRight: "5px" }}
                    />
                  }
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                className="rmPadding"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    message: "Please enter strong password",
                  },
                ]}
              >
                <Input.Password
                  style={{ padding: "6px", borderRadius: "4px" }}
                  prefix={
                    <LockOutlined
                      className="site-form-item-icon"
                      style={{ color: "grey", marginRight: "5px" }}
                    />
                  }
                  placeholder="Password"
                />
              </Form.Item>

              <div className={`${s.cleckLine} my-mg-bt`}>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  className="myFontSize "
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <div className={s.checkalink}>
                  <a href="" className={s.myA}>
                    Forgot your password
                  </a>
                </div>
              </div>

              <Form.Item>
                <Button htmlType="submit" className={s.mySubBtn}>
                  Sign in
                </Button>
              </Form.Item>
              <div style={{ color: "#ff4d4f", textAlign: "center" }}>
                {loginErr}
              </div>
            </Form>
            <div className={s.headLignDes}>
              Don't have an account?
              <span className={s.trialSpan}>
                <Link href="/signUp">
                  <a className={s.myA}> Sign up</a>
                </Link>
              </span>
            </div>
          </div>
          {/* <Divider style={{ color: "grey", paddingTop: "12px" }}>
            Or continue with
          </Divider>
          <div className={s.socialIcon}>
            <Row gutter={32}>
              <Col md={8}>
                <button className={s.sBtn}>
                  <FacebookFilled className={s.facebook} />
                </button>
                
              </Col>
              <Col md={8}>
                <button className={s.sBtn}>
                  <TwitterSquareFilled className={s.twitter} />
                </button>
                
              </Col>
              <Col md={8}>
                <button className={s.sBtn}>
                  <GithubFilled className={s.github} />
                </button>
               
              </Col>
            </Row>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default signIn;
