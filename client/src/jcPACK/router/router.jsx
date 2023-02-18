import {Route} from 'react-router-dom'
import LoadingToRedirect from '../components/LoadingToRedirect';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const routerSetup = (appData) => {
    return [
        <Route path={`${appData.path}`} 
            element={<LoadingToRedirect 
                path={`${appData.path}${appData.routesData[0].path}/`}
            />} 
        />,
        ...appData.routesData.map(({ path, type, title, element }) => {
        
            let route = <Route key={title} path={`${appData.path}${path}`} element={element} />;
        
            if(type === "private") route = 
                <Route key={title} exact path={`${appData.path}${path}`} element={<PrivateRoute urlPath={appData.path}/>}>
                    <Route path={`${appData.path}${path}`} element={element} />
                </Route>
            if(type === "public") route = 
                <Route key={title} exact path={`${appData.path}${path}`} element={<PublicRoute urlPath={appData.path} />}>
                    <Route path={`${appData.path}${path}`} element={element} />
                </Route>
        
            return route;
        })
    ]
    
}