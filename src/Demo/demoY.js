import {hashHistory} from 'react-router';
import echarts from 'echarts'
require('echarts-gl');

export default React.createClass( {
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('eChartsDemo6'));
         var img = new Image();
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

img.onload = function () {
    var width = canvas.width = img.width;
    var height = canvas.height = img.height;
    ctx.drawImage(img, 0, 0, width, height);
    var imgData = ctx.getImageData(0, 0, width, height);
    
    var data = [];
    for (var i = 0; i < imgData.data.length / 4; i++) {
        var r = imgData.data[i * 4];
        var g = imgData.data[i * 4 + 1];
        var b = imgData.data[i * 4 + 2];
        
        var lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b);
        lum = (lum - 125) / 10 + 50;
        data.push([i % width, height - Math.floor(i / width), lum]);
    }
    
    
    myChart.setOption( {
        tooltip: {},
        backgroundColor: '#fff',
        xAxis3D: {
            type: 'value'
        },
        yAxis3D: {
            type: 'value'
        },
        zAxis3D: {
            type: 'value',
            min: 0,
            max: 100
        },
        grid3D: {
            axisPointer: {
                show: false
            },
            viewControl: {
                distance: 100
            },
            postEffect: {
                enable: true
            },
            light: {
                main: {
                    shadow: true,
                    intensity: 2
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.2,
                    specularIntensity: 1
                }
            }
        },
        series: [{
            type: 'surface',
            silent: true,
            wireframe: {
                show: false
            },
            itemStyle: {
                color: function (params) {
                    var i = params.dataIndex;
                    var r = imgData.data[i * 4];
                    var g = imgData.data[i * 4 + 1];
                    var b = imgData.data[i * 4 + 2];
                    return 'rgb(' + [r, g, b].join(',') + ')';
                }  
            },
            data: data
        }]
    });
}
img.src=require('../img/download.png')
    },
    render(){
        return (
            <div>
                <p className='eChartsDemo1Back ' style={{position:'fixed',top:'10px',left:'20px',zIndex:100000}} onClick={()=>{hashHistory.push('/')}}>返回首页</p>
                <div id="eChartsDemo6" style={{width:document.body.scrollWidth,height:document.body.scrollHeight}}></div>
            </div>
        )
    }
})