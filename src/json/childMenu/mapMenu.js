export let mapMenu =     {
    title: "地图",
    nav:[
        {
            navType: "百度地图",
            nav: [
                {
                    text: "API（3.0）",
                    link: "https://lbsyun.baidu.com/index.php?title=jspopular3.0",
                    icon:"./icon/bmap.ico"
                },
                {
                    text: "拾取坐标",
                    link: "http://api.map.baidu.com/lbsapi/getpoint/index.html",
                    icon:"./icon/bmap.ico"
                },
                {
                    text: "百度地图生成器",
                    link: "http://api.map.baidu.com/lbsapi/createmap/index.html",
                    icon: "./icon/baidu.ico"
                }
            ]
        },
        {
            navType: "腾讯地图",
            nav: [
                {
                    text: "定位组件",
                    link: "https://lbs.qq.com/tool/component-geolocation.html",
                    icon:"./icon/txdt.png"
                },
                {
                    text: "API",
                    link: "https://lbs.qq.com/webApi/javascriptV2/jsGuide/jsOverview",
                    icon:"./icon/txdt.png"
                },
                {
                    text: "坐标拾取器",
                    link: "https://lbs.qq.com/tool/getpoint/index.html",
                    icon:"./icon/txdt.png"
                }
            ]
        },
        {
            navType: "高德地图",
            nav: [
                {
                    text: "API",
                    link: "https://lbs.amap.com/api/jsapi-v2/summary/",
                    icon:"//a.amap.com/pc/static/favicon.ico"
                }
            ]
        },
        {
            navType: "其他工具",
            nav: [
                {
                    text: "🔃 百度地图-----腾讯地图坐标互转",
                    link: "https://www.jianshu.com/p/687386d13a08"
                }
            ]
        },
    ]
};
