import React, { useEffect, useState, useRef } from "react";
import s from "../../styles/Dashboard.module.scss";
import Link from "next/link";
import {
  PlusCircleFilled,
  SafetyCertificateOutlined,
  SaveFilled,
  PlusCircleTwoTone,
  SearchOutlined,
  MinusCircleTwoTone,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { Row, Col, Button, Table, Space, Input, Tooltip } from "antd";
import flag from "../../utilities/countries.json";
const { Column, ColumnGroup } = Table;

import StatusCard from "../../components/StatusCard/StatusCard";

const dashboard = ({ data }) => {
  let getCountryName, isFav;
  const fakeRecoverd = data.Global.TotalConfirmed - 90587745;

  const router = useRouter();
  const searchInt = useRef();

  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [flags, setflags] = useState([]);
  const [islog, setislog] = useState(true);
  const [getUserId, setgetUserId] = useState("");
  const [addFavData, setaddFavData] = useState([]);
  const [CC, setCC] = useState("");
  const [isfav, setIsfav] = useState(false);
  const [CCarray, setCCarray] = useState([]);

  useEffect(() => {
    searchInt?.current?.searchText;
  }, [searchText]);

  console.log("SendData", data);

  useEffect(() => {
    const isLog = localStorage.getItem("isLogginUser");
    const isLoggin = JSON.parse(isLog);
    setislog(isLoggin);

    const getLocalUserId = localStorage.getItem("UserIdUser");
    const getUserIdData = JSON.parse(getLocalUserId);
    setgetUserId(getUserIdData);

    const getLocalFavData = localStorage.getItem("favCountryData");
    const getFavData = JSON.parse(getLocalFavData);

    if (getFavData === null) {
      localStorage.setItem("favCountryData", JSON.stringify(addFavData));
    } else {
      setaddFavData(getFavData);
    }
    console.log("testttt", getFavData);
    setflags(flag);
  }, []);

  // useEffect(() => {
  //   if (islog === false || islog === undefined || islog === null) {
  //     router.push("signIn");
  //   }
  // }, [islog]);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInt}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",

    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={searchText}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const onClickSave = (countryCode) => {
    setCC(countryCode);
    const getLocalFavData = localStorage.getItem("favCountryData");
    const getFavData = JSON.parse(getLocalFavData);

    console.log("getFavDataaaa", getFavData);

    let isUse = getFavData?.findIndex(function (ele) {
      return ele.userId === Number(getUserId);
    });

    if (isUse === -1) {
      console.log("User is nor present");

      const favObj = {
        userId: getUserId,
        favCountryCode: [],
      };
      const objTemp = { ...favObj };
      objTemp.favCountryCode.push(countryCode);

      const temp = [...getFavData];
      temp.push(objTemp);
      localStorage.setItem("favCountryData", JSON.stringify(temp));
      setaddFavData(temp);
    } else {
      console.log("User is present");
      const temping = [...getFavData];
      const tempMvData = [...temping[isUse].favCountryCode];

      const isFavMvId = tempMvData.findIndex(function (ele) {
        return ele === countryCode;
      });

      console.log("tempFavMvId", tempMvData);
      console.log("isFavMvId", isFavMvId);

      if (isFavMvId === -1) {
        const temp = [...getFavData];
        temp[isUse].favCountryCode.push(countryCode);
        localStorage.setItem("favCountryData", JSON.stringify(temp));
        setaddFavData(temp);
      } else {
        const temp = [...getFavData];
        temp[isUse].favCountryCode.splice(isFavMvId, 1);
        localStorage.setItem("favCountryData", JSON.stringify(temp));
        setaddFavData(temp);
      }
    }
  };

  useEffect(() => {
    const temp = addFavData ? [...addFavData] : [];
    const inxUserFav = temp?.findIndex(function (ele) {
      return ele.userId === getUserId;
    });
    setCCarray(temp[inxUserFav]?.favCountryCode);
  }, [addFavData]);

  useEffect(() => {
    // isFav = CCarray?.some(function (ele) {
    //   return ele === CC;
    // }),
    setIsfav(isFav);
  }, [CCarray]);

  const columns = [
    {
      title: "Country",
      dataIndex: "CountryCode",
      key: "CountryCode",
      width: "20%",
      ...getColumnSearchProps("Country"),
      render: (CountryCode) => (
        (getCountryName = flags.find((val) => val.code == CountryCode)),
        (
          <Link href={`/dashboard/${CountryCode}`}>
            <a>
              {
                <div className={s.countryInA}>
                  <div className={s.countryFInA}>{getCountryName?.flag}</div>
                  <Tooltip placement="top" title={getCountryName?.name}>
                    <div className={s.countryNInA}>{
                      getCountryName?.name?.length >= 15
                        ? getCountryName?.name?.slice(0, 13) + "..."
                        : getCountryName?.name
                      
                    }</div>
                  </Tooltip>
                </div>
              }
            </a>
          </Link>
        )
      ),
    },
    {
      title: "NewConfirmed",
      dataIndex: "NewConfirmed",
      key: "NewConfirmed",
      sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
      responsive: ["md"],
    },
    {
      title: "TotalConfirmed",
      dataIndex: "TotalConfirmed",
      key: "TotalConfirmed",
      sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
    },
    {
      title: "NewDeaths",
      dataIndex: "NewDeaths",
      key: "NewDeaths",
      responsive: ["md"],
      sorter: (a, b) => a.NewDeaths - b.NewDeaths,
    },
    {
      title: "TotalDeaths",
      dataIndex: "TotalDeaths",
      key: "TotalDeaths",
      responsive: ["md"],
      sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
    },
    {
      title: "NewRecovered",
      dataIndex: "NewRecovered",
      key: "NewRecovered",
      responsive: ["lg"],
      sorter: (a, b) => a.NewRecovered - b.NewRecovered,
    },
    {
      title: "TotalRecovered",
      dataIndex: "TotalRecovered",
      key: "TotalRecovered",
      responsive: ["lg"],
      sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
    },
    islog === true
      ? {
          title: "Save",
          dataIndex: "CountryCode",
          key: "CountryCode",

          render: (CountryCode) => (
            (isFav = CCarray?.some(function (ele) {
              return ele === CountryCode;
            })),
            (
              <Button
                shape="circle"
                // icon={<PlusCircleTwoTone />}
                icon={isFav ? <MinusCircleTwoTone /> : <PlusCircleTwoTone />}
                onClick={() => onClickSave(CountryCode)}
              />
            )
          ),
        }
      : {},
  ];

  return (
    <div className={s.mainContainerDashboard}>
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

      <div className={s.stausCardConatainer}>
        <Row justify="center">
          <Col xs={20}>
            <Row>
              <Col xs={24}>
                <div className={s.mainHead}>
                  <div className={s.mainHeadUp}>WORLD WIDE COVID-19 CASES</div>
                  <div className={s.mainHeadDown}>TOTAL NUMBER OF CASES</div>
                  <div className={s.mainHeadDes}>
                    The coronavirus COVID-19 is affecting 225 countries and
                    territories. Here is the data of globally cases. Data is
                    updated on {data.Date}
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col md={8} xs={24}>
                <StatusCard
                  head="Confirmed"
                  total={data.Global.TotalConfirmed}
                  newCase={data.Global.NewConfirmed}
                />
              </Col>
              <Col md={8} xs={24}>
                <StatusCard
                  head="Death"
                  total="90587745"
                  newCase={data.Global.NewDeaths}
                  colorClass={"myProBgTomato"}
                />
              </Col>
              <Col md={8} xs={24}>
                <StatusCard
                  head="Reacovered"
                  total={fakeRecoverd}
                  newCase="32302"
                  colorClass={"myProBgGreen"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={s.countryTableContainer}>
        <Row justify="center">
          <Col xs={20}>
            <Row>
              <Col xs={24}>
                <div className={s.mainHead}>
                  <div className={s.mainHeadUp}>
                    COUNTRY WHERE COVID-19 SPREAD
                  </div>
                  <div className={s.mainHeadDown}>CASES OF EACH COUNTRY</div>
                  <div className={s.mainHeadDes}>
                    The list of countries and their regional classification is
                    based on the United Nations Geoscheme. Sources are provided
                    under "Latest News." For more details regarding Covid-19 you
                    can go in that particular country.
                  </div>
                </div>
              </Col>
            </Row>

            <div className={s.countryTableBox}>
              <Table
                className="customTable"
                columns={columns}
                dataSource={data?.Countries}
                size="small"
              ></Table>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default dashboard;

export async function getServerSideProps() {
  const response = await fetch("https://api.covid19api.com/summary");
  const SendData = await response.json();
  return {
    props: {
      data: SendData,
    },
  };
}
