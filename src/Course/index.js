import {hashHistory} from 'react-router';
import demo2 from '../Demo/demo2.js'
import demo3 from '../Demo/demo3.js'
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
        demo2('eChartsDemo2',this)
        demo3('eChartsDemo3',this)
    },
    ECharts(){
        return (
            <div id="eChartsDemo2" style={{width:document.body.scrollWidth,height:document.body.scrollHeight}}></div>
        )
    },
    TextA(){
        return (
            <div>
                <h6>引入 ECharts</h6>
                <p>&lt;script src="echarts.min.js"&gt;&lt;script&gt;</p>
                <img className="img1" src={require('../img/img1.png')}/>
                <div id="eChartsDemo3"></div>
            </div>
        )
    },
    TextB(){
        return (
            <div>
                <h6>引入 ECharts</h6>
                <img className="img1" src={require('../img/img2.png')}/>
            </div>
        )
    },
    page(type){
        let component = [this.TextA(),this.TextB()];
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
                <div className='eChartsDemo2' style={{width:document.body.scrollWidth*0.9,height:document.body.scrollHeight*0.9}}>
                    <h5>ECharts 教程</h5>
                    {this.state.component}
                    <p className={'eChartsDemo1Up '+this.state.echartShow} onClick={()=>{this.page('-')}}>上一页</p>
                    <p className="eChartsDemo1Down" onClick={()=>{this.page('+')}}>下一页</p>
                    <p className={'eChartsDemo1Back '+this.state.echartHide} onClick={()=>{hashHistory.push('/')}}>返回首页</p>
                </div>
            </div>
        )
    }
})