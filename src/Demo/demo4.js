import echarts from 'echarts'
import {hashHistory} from 'react-router';

export default (eCharts,props)=>{
    var myChart = echarts.init(document.getElementById(eCharts));
    var tips = 0;

function loading() {
    return [{
        value: tips,
        itemStyle: {
            normal: {
                color: '#fb358a',
                shadowBlur: 10,
                shadowColor: '#fb358a'
            }
        }
    }, {
        value: 100 - tips,
    }];
}

var option = {
    title: {
        text: (tips * 1) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fb358a',
            fontSize: 40,
        }
    },
    series: [{
        name: 'loading',
        type: 'pie',
        radius: ['30%', '31%'],
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
            }
        },
        data: loading(),
    }]
};
myChart.setOption(option)
cess(10)
function cess(tips){
    myChart.setOption({
        title: {
            text: tips + '%'
        },
        series: [{
            name: 'loading',
            data: loading()
        }]
    })
}
}