
import demo0 from '../Demo/demo0.js'

var Main = React.createClass( {
    componentDidMount(){
        demo0('eChartsDemo0',this)
    },
    ECharts(){
        return (
            <div id="eChartsDemo0" style={{width:document.body.scrollWidth,height:document.body.scrollHeight}}></div>
        )
    },
    render(){
        return (
            <div>
                <this.ECharts/>
            </div>
        )
    }
})
export default Main