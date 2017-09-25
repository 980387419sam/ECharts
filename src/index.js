import {render} from "react-dom";
import {Router , Route, hashHistory} from "react-router";
import Main from "./Main/index.js"
import Demo from "./Demo/index.js"
import Characteristic from "./Characteristic/index.js"
import Course from "./Course/index.js"
import Api from "./Api/index.js"
import Config from "./Config/index.js"
import Demo6 from "./Demo/demo6.js"
import Demo7 from "./Demo/demo7.js"
import Demo8 from "./Demo/demo8.js"
import DemoN from "./Demo/demoN.js"
import DemoY from "./Demo/demoY.js"

var App = React.createClass({
    render : function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main} ></Route>
                <Route path="/demo" component={Demo} ></Route>
                <Route path="/characteristic" component={Characteristic} ></Route>
                <Route path="/course" component={Course} ></Route>
                <Route path="/api" component={Api} ></Route>
                <Route path="/config" component={Config} ></Route>
                <Route path="/demo/demo6" component={Demo6} ></Route>
                <Route path="/demo/demo7" component={Demo7} ></Route>
                <Route path="/demo/demo8" component={Demo8} ></Route>
                <Route path="/demo/demoN" component={DemoN} ></Route>
                <Route path="/demo/demoY" component={DemoY} ></Route>
            </Router>
        );
    }
})



render(<App />,document.getElementById("app"));