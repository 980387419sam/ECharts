import {hashHistory} from 'react-router';
import demo4 from '../Demo/demo4.js'
import demo5 from '../Demo/demo5.js'
require('./index.less')

export default React.createClass( {
    getInitialState(){
        return {
            component:this.TextA(),
            num:0,
            echartHide:'echartHide',
            echartShow:'echartHide'
        }
    },
    componentDidMount(){
        demo4('eChartsDemo4',this)
        demo5('eChartsDemo5',this)
    },
    ECharts(){
        return (
            <div id="eChartsDemo4" style={{width:300,height:300}}></div>
        )
    },
    EChartsA(){
        return (
            <div id="eChartsDemo5" style={{width:300,height:300}}></div>
        )
    },
    TextA(){
        return (
            <div>
                <h6> echarts </h6>
                <p>echarts.init() : 创建一个 ECharts 实例，返回 echartsInstance，不能再单个容器上初始化多个 ECharts 实例。</p>
                <p>echarts.connect([chart1, chart2]) : 多个图表实例实现联动。</p>
                <p>echarts.disconnect(id) : 解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 group 设为空。</p>
                <p>echarts.dispose() : 销毁实例，实例销毁后无法再被使用。</p>
                <p>echarts.getInstanceByDom() : 获取 dom 容器上的实例。</p>
                <p>echarts.registerMap() : 注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。</p>
            </div>
        )
    },
    page(type){
        let component = [this.TextA()];
        var n = Number(this.state.num);
        if(type=='+'){
            n=n>=component.length-1?component.length-1:n+1;
            this.setState({
                num:n,
                component:component[n]
            })
        }else{
            n=n<=0?0:n-1;
            this.setState({
                num:n,
                component:component[n]
            })
        }
        if(n==component.length-1){
            this.setState({
                echartHide:'echartShow'
            })
        }else{
            this.setState({
                echartHide:'echartHide'
            })
        }
        if(n==0){
            this.setState({
                echartShow:'echartHide'
            })
        }else{
            this.setState({
                echartShow:'echartShow'
            })
        }
    },
    render(){
        return (
            <div>
                <this.ECharts/>
                <this.EChartsA/>
                <div className='eChartsDemo2' style={{width:document.body.scrollWidth*0.9,height:document.body.scrollHeight*0.9}}>
                    <h5>ECharts API</h5>
                    {this.state.component}
                    <p className={'eChartsDemo1Up '+this.state.echartShow} onClick={()=>{this.page('-')}}>上一页</p>
                    <p className="eChartsDemo1Down" onClick={()=>{this.page('+')}}>下一页</p>
                    <p className={'eChartsDemo1Back '+this.state.echartHide} onClick={()=>{hashHistory.push('/')}}>返回首页</p>
                </div>
            </div>
        )
    }
})