import React, { useEffect, useState } from "react";
import s from "../../styles/SignUp.module.scss";
import Link from "next/link";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { Select } from "antd";
import { useRouter } from 'next/router'

import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";

const signUp = () => {
  
  const router = useRouter()
  const { Option } = Select;
  const [form] = Form.useForm();

  const [userArr, setuserArr] = useState([]);
  const [isExist, setisExist] = useState('');


  useEffect(() => {


    let getLocalRegData = localStorage.getItem("registerUser");
    let getRegData = JSON.parse(getLocalRegData);

    if(getRegData===null){
      localStorage.setItem("registerUser", JSON.stringify(userArr));
    }
    else{
      setuserArr(getRegData);
    }
    console.log('getRegDat',getRegData)

  }, []);

  useEffect(() => {
    console.log(isExist)
  }, [isExist])

  function userExists(email) {
    return userArr.some(function (el) {
      return el.email === email;
    });
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    
    let registerData = {
      id: userArr.length + 1,
      email: values.email,
      password: values.password,
      country: values.country,
      terms: values.terms,
    };

    if (userExists(values.email)) {
      setisExist("Sorry email is already existing");
    } else {
      
      let temp = [...userArr];
      temp.push(registerData);
      setuserArr(temp);

      setisExist("");
      form.resetFields();
      router.push('/signIn');
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  useEffect(() => {
    localStorage.setItem("registerUser", JSON.stringify(userArr));
  }, [userArr]);

  return (
    <div className={s.mainSignIn}>
      <Row className={s.mainRow}>
        <Col
          lg={{ offset: 7, span: 10 }}
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
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                // label="Email"
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

              {/* <Form.Item
                name="password"
                // label="Password"
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
              </Form.Item> */}

              <Row gutter={16}>
                <Col span={12}>
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
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="confirm password"
                    className="rmPadding"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "Confirm password not same as password"
                            )
                          );
                        },
                      }),
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
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="country"
                className="rmPadding my-slect-mg-bt"
                rules={[{ required: true, message: "Please select country" }]}
              >
                <Select
                  style={{ borderRadius: "10px" }}
                  placeholder="Select your country"
                  listHeight={100}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="India">🇮🇳 India</Option>
                  <Option value="USA">🇺🇸 United States</Option>
                  <Option value="China">🇨🇳 China</Option>
                  <Option value="Australia">🇦🇺 Australia</Option>
                  <Option value="Bhutan">🇧🇹 Bhutan</Option>
                  <Option value="Brazil">🇧🇷 Brazil</Option>
                  <Option value="Colombia">🇨🇴 Colombia</Option>
                  <Option value="Denmark">🇪🇨 Denmark</Option>
                  <Option value="France">🇫🇷 France</Option>
                  <Option value="Germany">🇩🇪 Germany</Option>
                  <Option value="Indonesia">🇮🇩 Indonesia</Option>
                  <Option value="Japan">🇯🇵 Japan</Option>
                </Select>
              </Form.Item>

              <div className={`${s.cleckLine} my-mg-bt`}>
                <Form.Item
                  name="terms"
                  valuePropName="checked"
                  className="myFontSize rmPadding"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  <Checkbox>I agree with terms & condition</Checkbox>
                </Form.Item>
              </div>

              <Form.Item className="btn-mg-bottom">
                <Button htmlType="submit" className={s.mySubBtn}>
                  Sign up
                </Button>
              </Form.Item>
              <div style={{color:'#ff4d4f',textAlign:'center'}}>{isExist}</div>
            </Form>

            <Divider
              className="dividerMg"
              style={{ color: "grey", fontSize: "14px" }}
            >
              or
            </Divider>

            <div className={s.socBtnContain}>
              <div className={s.btnBox}>
                <Button
                  shape="circle"
                  icon={
                    <FacebookFilled
                      className={`${s.facebook} inconCustomSize`}
                      style={{ fontSize: "24px" }}
                    />
                  }
                  size="large"
                />
                {/* <button className={s.sBtn}>
                  <FacebookFilled className={`${s.facebook} inconCustomSize`} />
                </button> */}
              </div>
              <div className={s.btnBox}>
                <Button
                  shape="circle"
                  icon={
                    <GithubFilled
                      className={s.github}
                      style={{ fontSize: "24px" }}
                    />
                  }
                  size="large"
                />
              </div>
              <div className={s.btnBox}>
                <Button
                  shape="circle"
                  icon={
                    <TwitterSquareFilled
                      className={s.twitter}
                      style={{ fontSize: "24px" }}
                    />
                  }
                  size="large"
                />
              </div>
            </div>

            {/* <div className={s.headLignDes}>
              Already have an account?
              <span className={s.trialSpan}>
                <Link href="/signIn">
                  <a className={s.myA}> Sign in</a>
                </Link>
              </span>
            </div> */}
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

export default signUp;

// {/* <Row className={s.mainRow}>
//         <Col
//           lg={{ offset: 3, span: 10 }}
//           // md={{ offset: 4, span: 16 }}
//           className={s.colRight}
//         >
//           <div className={s.form}>
//             <div className={s.formHeadtext}>Sign up</div>

//             <Form
//               className={s.cust}
//               name="basic"
//               initialValues={{
//                 remember: true,
//               }}
//               layout="vertical"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 name="username"
//                 label="Username"
//                 className="rmPadding"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your username",
//                   },
//                   {
//                     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid username",
//                   },
//                 ]}
//               >
//                 <Input
//                   style={{ padding: "6px", borderRadius: "4px" }}
//                   prefix={
//                     <UserOutlined
//                       className="site-form-item-icon"
//                       style={{ color: "grey", marginRight: "5px" }}
//                     />
//                   }
//                   placeholder="Username"
//                 />
//               </Form.Item>
//               <Row gutter={16}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="password"
//                     label="Password"
//                     className="rmPadding"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your password!",
//                       },
//                       {
//                         pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//                         message: "Please enter strong password",
//                       },
//                     ]}
//                   >
//                     <Input.Password
//                       style={{ padding: "6px", borderRadius: "4px" }}
//                       prefix={
//                         <LockOutlined
//                           className="site-form-item-icon"
//                           style={{ color: "grey", marginRight: "5px" }}
//                         />
//                       }
//                       placeholder="Password"
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="confirm password"
//                     label="Confirm Password"
//                     className="rmPadding"
//                     dependencies={["password"]}
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your password!",
//                       },
//                       ({ getFieldValue }) => ({
//                         validator(_, value) {
//                           if (!value || getFieldValue("password") === value) {
//                             return Promise.resolve();
//                           }
//                           return Promise.reject(
//                             new Error(
//                               "The two passwords that you entered do not match!"
//                             )
//                           );
//                         },
//                       }),
//                     ]}
//                   >
//                     <Input.Password
//                       style={{ padding: "6px", borderRadius: "4px" }}
//                       prefix={
//                         <LockOutlined
//                           className="site-form-item-icon"
//                           style={{ color: "grey", marginRight: "5px" }}
//                         />
//                       }
//                       placeholder="Confirm Password"
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Form.Item
//                 name="country"
//                 label="Country"
//                 className="rmPadding"
//                 rules={[{ required: true, message: "Please select country" }]}
//               >
//                 <Select
//                   style={{ borderRadius: "6px" }}
//                   placeholder="select your country"
//                   listHeight={100}
//                   showSearch
//                   optionFilterProp="children"
//                   filterOption={(input, option) =>
//                     option.children
//                       .toLowerCase()
//                       .indexOf(input.toLowerCase()) >= 0
//                   }
//                 >
//                   <Option value="India">🇮🇳 India</Option>
//                   <Option value="USA">🇺🇸 United States</Option>
//                   <Option value="China">🇨🇳 China</Option>
//                   <Option value="Australia">🇦🇺 Australia</Option>
//                   <Option value="Bhutan">🇧🇹 Bhutan</Option>
//                   <Option value="Brazil">🇧🇷 Brazil</Option>
//                   <Option value="Colombia">🇨🇴 Colombia</Option>
//                   <Option value="Denmark">🇪🇨 Denmark</Option>
//                   <Option value="France">🇫🇷 France</Option>
//                   <Option value="Germany">🇩🇪 Germany</Option>
//                   <Option value="Indonesia">🇮🇩 Indonesia</Option>
//                   <Option value="Japan">🇯🇵 Japan</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item>
//                 <Button htmlType="submit" className={s.mySubBtn}>
//                   Sign up
//                 </Button>
//               </Form.Item>
//             </Form>
//             <Divider style={{ color: "grey" }}>Or continue with</Divider>
//             <div >
//               <Row gutter={32}>
//                 <Col md={8} style={{display:'flex', justifyContent:'center'}}>
//                   <button className={s.sBtn}>
//                     <FacebookFilled className={`${s.facebook} inconCustomSize`} style={{fontSize:'24px'}}/>
//                   </button>
//                 </Col>
//                 <Col md={8} style={{display:'flex', justifyContent:'center'}}>
//                   <button className={s.sBtn}>
//                     <TwitterSquareFilled className={s.twitter} />
//                   </button>
//                 </Col>
//                 <Col md={8} style={{display:'flex', justifyContent:'center'}}>
//                   <button className={s.sBtn}>
//                     <GithubFilled className={s.github} />
//                   </button>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//           {/*
//            */}
//            </Col>
//            <Col
//              lg={{ span: 10 }}
//              // md={{ offset: 4, span: 16 }}
//              className={s.wrapeerLwft}
//            >
//              <div className={s.symbol}>
//                <img src="/Assets/logoBlue.png" height="84px" width="94px" />
//              </div>
//              <div className={s.headLign}>
//                <div className={s.headLignLab}>Sign in to your account ?</div>
//                <div className={s.headLignDes}>
//                  Already have an account ?
//                  <span className={s.trialSpan}>
//                    <Link href="/signIn">
//                      <a className={s.myA}> Sign in</a>
//                    </Link>
//                  </span>
//                </div>
//              </div>
//            </Col>
//          </Row>

//                 */}
