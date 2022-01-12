import React,{ useState,useCallback} from 'react';
import { BrowserRouter as Router, Route ,Routes,Navigate } from 'react-router-dom';

import Users from './user/pages/Users'
import Authentication from './user/pages/auth'
import NewPlace from './places/pages/NewPlace'
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  let routes;
  const [isLoggedIn,setIsLogin] = useState(false);

  const login = useCallback(() => {
    setIsLogin(true);
  },[])

  const logout = useCallback(() => {
    setIsLogin(false);
  },[])

  

  if(!isLoggedIn){
    routes= (
      <React.Fragment>
        <Routes>
          <Route path="/" element = {<Users />} exact={true}/>
          <Route path="/:uid/places/" element = {<UserPlaces />} exact={true}/>
          <Route path="/auth" element = {<Authentication />} exact={true}/>
        </Routes>
        {/* <Navigate to="/"  exact={true} /> */}
      </React.Fragment>
    )
  }else{
    routes = (
      <React.Fragment>
        <Routes>
          <Route path="/" element = {<Users />} exact={true}/>
          <Route path="/place/new/" element = {<NewPlace />} exact={true}/>
          <Route path="/:uid/places/" element = {<UserPlaces />} exact={true}/>
          <Route path="/place/:placeId" element = {<UpdatePlace />} exact={true}/>
        </Routes>
        
      </React.Fragment>

    )
  }
  
  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn , login:login, logout:logout
    }}>
      <Router>
        <MainNavigation />
        <main>
          {/* <Routes>
            <Route path="/" element = {<Users />} exact={true}/>
            <Route path="/place/new/" element = {<NewPlace />} exact={true}/>
            <Route path="/:uid/places/" element = {<UserPlaces />} exact={true}/>
            <Route path="/place/:placeId" element = {<UpdatePlace />} exact={true}/>
            <Route path="/auth" element = {<Authentication />} exact={true}/>
            
          </Routes> */}
          {routes}
        </main>
      </Router>
      
    </AuthContext.Provider>
  );
};

export default App;