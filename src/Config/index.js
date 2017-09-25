import {hashHistory} from 'react-router';

export default React.createClass( {
    render(){
        return (
            <div>
                <h5>ECharts 配置项</h5>
                <p className='eChartsDemo1Back ' onClick={()=>{hashHistory.push('/')}}>返回首页</p>
            </div>
        )
    }
})