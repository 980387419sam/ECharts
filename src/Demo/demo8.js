import {hashHistory} from 'react-router';
import echarts from 'echarts'
require('echarts-gl');

export default React.createClass( {
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('eChartsDemo6'));
var option = {
    backgroundColor: '#000',
    globe: {
        baseTexture:require('../img/data-1491837049070-rJZtl7Y6x.jpg'),
        heightTexture:require('../img/data-1491837049070-rJZtl7Y6x.jpg'),
        displacementScale: 0.04,
        shading: 'realistic',
        environment:require('../img/data-1491837999815-H1_44Qtal.jpg'),
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};
myChart.setOption(option);
    },
    render(){
        return (
            <div>
                <p className='eChartsDemo1Back ' style={{color:'#fff',position:'fixed',top:'10px',left:'20px',zIndex:100000}} onClick={()=>{hashHistory.push('/')}}>返回首页</p>
                <div id="eChartsDemo6" style={{width:document.body.scrollWidth,height:document.body.scrollHeight}}></div>
            </div>
        )
    }
})