
//echarts图标
var echart1 = echarts.init(document.getElementById("echarts-div1"));
var echart2 = echarts.init(document.getElementById("echarts-div2"));
//首页右边栏项目选择 选择ul下面的li内容
var items = document.getElementById("table-ul").getElementsByTagName("li");
//取出待处理、产品/项目、优先级的span
var spans = document.getElementById("right-div-table-title").getElementsByTagName("span");
// span计数 待处理 测试用
var countSpan = 0;


for (var i = 0; i < items.length; i++) {
    items[i].onclick = show;
}
//show 点击之后给li标签加一个css样式
function show() {
    for (var i = 0; i < items.length; i++) {
        if (items[i] === this) {
            items[i].className = "active";
            // 后端传值用
            // document.getElementById("spanHandle").innerHTML = 999;
            // 测试用
            countSpan = i;
            judge(countSpan);
        } else {
            items[i].className = "";
        }
    }
}

//后端如果传值，可不做判断直接塞
function judge(countSpan) {
    if (countSpan == 0) {
        document.getElementById("spanHandle").innerHTML = 156;
        // 项目span itemSpan
        document.getElementById("itemSpan").innerHTML = "ISee";
        // 优先级span levelSpan
        document.getElementById("leaveSpan").innerHTML = 1;
    } else if (countSpan == 1) {
        document.getElementById("spanHandle").innerHTML = 234;
        document.getElementById("itemSpan").innerHTML = "Log4x";
        document.getElementById("leaveSpan").innerHTML = 2;
    } else if (countSpan == 2) {
        document.getElementById("spanHandle").innerHTML = 197;
        document.getElementById("itemSpan").innerHTML = "Amber";
        document.getElementById("leaveSpan").innerHTML = 3;
    } else {
        alert("出现未知错误")
    }
}


// 系统设置下拉菜单
function sub_menu(idCode) {
    var father_menu = document.getElementById(idCode);
    // console.log(father_menu);
    var idCode_display = father_menu.style.display;
    if (idCode_display == "block") {
        father_menu.style.display = "none";
    } else {
        father_menu.style.display = "block";
    }
}

var option1 = {
    title: {
        text: 'BUG来源分布情况',
        padding: 5,
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.1,
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return params.seriesName + ' : ' + params.name + '<br>数量 : ' + value;
        }
    },
    series: [
        {
            name: '平台',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            data: [
                { value: 235, name: 'OSB' },
                { value: 274, name: 'CSF' },
                { value: 310, name: 'Aicache' },
                { value: 335, name: 'Amber' },
                { value: 400, name: 'ISee' },
                { value: 100, name: "log4X" },
                { value: 275, name: "Uspa" },
                { value: 340, name: "OSP" }
            ]
        }
    ]
};
option2 = {
    title: {
        text: '上周测试情况统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['功能测试', '接口测试', '集成测试', '压力测试', '回归测试']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '功能测试',
            type: 'line',
            stack: '剩余量',
            data: [60, 52, 31, 14, 20, 20, 10]
        },
        {
            name: '接口测试',
            type: 'line',
            stack: '剩余量',
            data: [120, 102, 91, 54, 30, 21, 14]
        },
        {
            name: '集成测试',
            type: 'line',
            stack: '剩余量',
            data: [6, 5, 4, 3, 2, 1, 7]
        },
        {
            name: '压力测试',
            type: 'line',
            stack: '剩余量',
            data: [12, 11, 8, 6, 4, 2, 5]
        },
        {
            name: '回归测试',
            type: 'line',
            stack: '总量',
            data: [80, 92, 91, 94, 190, 130, 120]
        }
    ]
};

echart1.setOption(option1);
echart2.setOption(option2);








