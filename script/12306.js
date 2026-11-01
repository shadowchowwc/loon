/*
脚本作者：RuCu6[https://github.com/RuCu6]
脚本日期：2024-11-24
引用地址：https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/header.js
*/

const url = $request.url;
const headers = $request.headers || {};

const operationKey = Object.keys(headers).find(
  key => key.toLowerCase() === "operation-type"
);

const headopt = operationKey ? headers[operationKey] : "";

if (url.includes("mobile.12306.cn/otsmobile/app/mgs/")) {
  // 12306页面内容
  const list12306 = [
    // "com.cars.otsmobile.bangbangSafe.deciveInfo", // 设备序列号
    // "com.cars.otsmobile.checkLoginStatus", // 登录信息
    // "com.cars.otsmobile.city",
    // "com.cars.otsmobile.initCountry",
    // "com.cars.otsmobile.initNewSysCache",
    // "com.cars.otsmobile.initProvince",
    "com.cars.otsmobile.integration.activityBanner", // 活动横幅
    "com.cars.otsmobile.memberInfo.getMemberQa", // 铁路会员 常见问题
    // "com.cars.otsmobile.memberInfo.integrationHomeInit", // 铁路会员 会员信息
    // "com.cars.otsmobile.newHomePage.getWeatherByStationCode", // 天气信息
    "com.cars.otsmobile.newHomePage.initData", // 热门资讯
    "com.cars.otsmobile.newHomePageBussData", // 商品信息流
    // "com.cars.otsmobile.newHomePageRefresh",
    "com.cars.otsmobile.paySuccBuss.bussEntryShow" // 商业推广
    // "com.cars.otsmobile.travelPage.initData", // 出行服务
  ];

  if (list12306.includes(headopt)) {
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: "{}"
      }
    });
  } else {
    $done({});
  }
} else {
  $done({});
}
