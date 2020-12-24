import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';

import Axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props)
  
  }
 

  // callAPI() {
  //   fetch("http://localhost:9000/")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));  
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }
  render() {
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });




    return (
    <div>
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
      </Switch>
    </div>
    )
  }
};

export default App;