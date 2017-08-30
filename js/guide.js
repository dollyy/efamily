/*地图*/
var provinces = ['shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian','jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang','shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
var currentIdx = 0;
var myChart=echarts.init(document.getElementById("main"));
var myCharttwo=echarts.init(document.getElementById("maintwo"));
//指定图表的配置项和数据并显示图表
myChart.setOption({
    /*标题组件*/
    title: {
        text: '',       //主标题文本
        subtext: '',    //副标题文本
        left: 'center'  //组件离容器左侧的距离
    },
    /*提示框组件*/
    tooltip: {
        trigger: 'item',    //触发类型,item为数据项图形触发
        formatter:'{b}'     //提示框浮层内容格式器
    },
    /*系列列表*/
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            label: {        //图形上的文本标签
                normal: {show: true},
                emphasis: {show: true}
            },
            data:[               
               {name: '北京', value:1},
               {name: '天津', value:2},
               {name: '上海', value:3},
               {name: '重庆', value:4},
               {name: '河北', value:5},
               {name: '河南', value:6},
               {name: '云南', value:7},
               {name: '辽宁', value:8},
               {name: '黑龙江',value:9},
               {name: '湖南', value:10},
               {name: '安徽', value:11},
               {name: '山东', value:12},
               {name: '新疆', value:13},
               {name: '江苏', value:14},
               {name: '浙江', value:15},
               {name: '江西', value:16},
               {name: '湖北', value:17},
               {name: '广西', value:18},
               {name: '甘肃', value:19},
               {name: '山西', value:20},
               {name: '内蒙古', value:21},
               {name: '陕西', value:22},
               {name: '吉林', value:23},
               {name: '福建', value:24},
               {name: '贵州', value:25},
               {name: '广东', value:26},
               {name: '青海', value:27},
               {name: '西藏', value:28},
               {name: '四川', value:29},
               {name: '宁夏', value:30},
               {name: '海南', value:31},
               {name: '台湾', value:32},
               {name: '香港', value:33},
               {name: '澳门', value:34},
               {name: '南海诸岛', value:35}
            ]
        }
    ],
    dataRange: {
       x: '-1000px',//图例横轴位置
       y: '-1000px',//图例纵轴位置
       splitList: [
        {start:1, end:1, label: '北京', color: '#cfc5de'},
        {start:2, end:2, label: '天津', color: '#f1ebd1'},
        {start:3, end:3, label: '上海', color: '#feffdb'},
        {start:4, end:4, label: '重庆', color: '#e0cee4'},
        {start:5, end:5, label: '河北', color: '#fde8cd'},
        {start:6, end:6, label: '河南', color: '#e4f1d7'},
        {start:7, end:7, label: '云南', color: '#fffed7'},
        {start:8, end:8, label: '辽宁', color: '#e4f1d7'},
        {start:9, end:9, label: '黑龙江', color: '#e4f1d7'},
        {start:10, end:10, label: '湖南', color: '#fffed7'},
        {start:11, end:11, label: '安徽', color: '#fffed8'},
        {start:12, end:12, label: '山东', color: '#dccee7'},
        {start:13, end:13, label: '新疆', color: '#fffed7'},
        {start:14, end:14, label: '江苏', color: '#fce8cd'},
        {start:15, end:15, label: '浙江', color: '#ddceeb'},
        {start:16, end:16, label: '江西', color: '#e4f1d3'},
        {start:17, end:17, label: '湖北', color: '#fde8cd'},
        {start:18, end:18, label: '广西', color: '#fde8cd'},
        {start:19, end:19, label: '甘肃', color: '#fde8cd'},
        {start:20, end:20, label: '山西', color: '#fffdd6'},
        {start:21, end:21, label: '内蒙古', color: '#ddcfe6'},
        {start:22, end:22, label: '陕西', color: '#fad8e9'},
        {start:23, end:23, label: '吉林', color: '#fce8cd'},
        {start:24, end:24, label: '福建', color: '#fad8e8'},
        {start:25, end:25, label: '贵州', color: '#fad8e8'},
        {start:26, end:26, label: '广东', color: '#ddcfe8'},
        {start:27, end:27, label: '青海', color: '#fad8e9'},
        {start:28, end:28, label: '西藏', color: '#ddcfe6'},
        {start:29, end:29, label: '四川', color: '#e4f1d5'},
        {start:30, end:30, label: '宁夏', color: '#fefcd5'},
        {start:31, end:31, label: '海南', color: '#fad8e9'},
        {start:32, end:32, label: '台湾', color: '#fce8cd'},
        {start:33, end:33, label: '香港', color: '#dc9bbb'},
        {start:34, end:34, label: '澳门', color: '#e0f7cc'},
        {start:35, end:35, label: '南海诸岛', color: '#e0f7cc'}
       ]
   }
});


myChart.on("click",function(params){
    for(var i=0;i<provincesText.length;i++){
        if(params.name == provincesText[i]){
            currentIdx=i;
        }
    }
    showProvince();
})

       
        
function showProvince() {
    option = {
        graphic: [{
            id: 'left-btn',
            type: 'circle',
            shape: { r: 20 },
            style: {
                text: 'prev',
                fill: '#eee'
            },
            left: 10,
            top: 'middle',
            onclick: function () {
                currentIdx -= 1;
                if (currentIdx < 0) {
                    currentIdx += provinces.length;
                }
                showProvince();
            }
        },{
            id: 'right-btn',
            type: 'circle',
            shape: { r: 20 },
            style: {
                text: 'next',
                fill: '#eee'
            },
            top: 'middle',
            right: 10,
            onclick: function () {
                currentIdx = (currentIdx + 1) % provinces.length;
                showProvince();
            }
        },{
            id: 'top-btn',
            type: 'circle',
            shape: { r: 20 },
            style: {
                text: 'X',
                fill: '#eee'
            },
            top: '20',
            right: 10,
            onclick: function () {
                $("#main").css({"display":"block"});
            }
        }],
        series: []
    };
    myCharttwo.setOption(option);
    
    var name = provinces[currentIdx];
    // myChart.showLoading();
    $.get('json/province/'+name+'.json', function (geoJson){
        // myChart.hideLoading();
        echarts.registerMap(name, geoJson);
        myCharttwo.setOption(option = {
            backgroundColor: '#404a59',
            title: {
                text: provincesText[currentIdx],
                left: 'center',
                textStyle: {color: '#fff'}
            },
            tooltip: {
                trigger: 'item',
                formatter:'{b}'
            },
            series: [
                {
                    type: 'map',
                    mapType: name,
                    label: {
                        emphasis: {
                            textStyle: {color: '#fff'}
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#389BB7',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    },
                    animation: false
                }
            ]
        });
        myCharttwo.on("click",function(params){
            showCity();
        })
        $("#main").css({"display":"none"});
    });
}

function showCity(){
            alert(1);
        $.get('json/city/maanshan.json', function (geoJson){
        // myChart.hideLoading();
    });
}







////柱状图
//// 基于准备好的dom，初始化echarts实例
//var myChart = echarts.init(document.getElementById('main'));
//
//// 指定图表的配置项和数据
//var option = {
//    title: {
//        text: 'ECharts 入门示例'
//    },
//    tooltip: {},
//    legend: {
//        data:['销量']
//    },
//    xAxis: {
//        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//    },
//    yAxis: {},
//    series: [{
//        name: '销量',
//        type: 'bar',
//        data: [5, 20, 36, 10, 10, 20]
//    }]
//};
//// 使用刚指定的配置项和数据显示图表
//myChart.setOption(option);




//饼图
// 路径配置
require.config({
    paths:{ 
        'echarts' : 'js/echarts',
        'echarts/chart/pie' : 'js/echarts'
    }
});


// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main2')); 

        option = {
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            };

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);
