const usingComponents = {
  "aaa-bbb": "../../aaa-bbb/index",
};

if (process.env.TARO_ENV === "xhs") {
  usingComponents["aaa-bbb"] = "../../aaa-bbb-xhs/index";
}

if (process.env.TARO_ENV === "tt") {
  usingComponents["aaa-bbb"] = "../../aaa-bbb-tt/index";
}
if (process.env.TARO_ENV === "kwai") {
  usingComponents["aaa-bbb"] = "../../aaa-bbb-kwai/index";
}

export default definePageConfig({
  navigationBarTitleText: "首页",
  usingComponents,
});
