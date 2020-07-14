import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router/immutable";
import DashBoard from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import {history} from "./Redux/store";

const Routes = ({}) => {
    return (
        <ConnectedRouter history={history}>
            {/*<Auth>*/}
            <NavBar/>
            <div id={"page-content"}>
                <div className={'content-wrapper'}>
                    <div className={'content'}>
                    <Switch>
                        <Route path="/" exact={true} component={DashBoard}/>
                    </Switch>
                    </div>
                </div>
                </div>
            {/*</Auth>*/}
        </ConnectedRouter>
    );
};



export default Routes;