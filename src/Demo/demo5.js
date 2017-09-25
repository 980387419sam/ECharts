import echarts from 'echarts'
import {hashHistory} from 'react-router';

export default (eCharts,props)=>{
    var myChart = echarts.init(document.getElementById(eCharts));
    
}