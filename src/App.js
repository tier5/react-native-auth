/**
 * App Component - Root View of App
 *
 * @author tier5
 */

import React, {Component} from 'react';
import {Button, View} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {loggedIn: false};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAux9Z-h2WeNgAalpgfO3eHi-fOvMnU62k',
      authDomain: 'coral-shift-138423.firebaseapp.com',
      databaseURL: 'https://coral-shift-138423.firebaseio.com',
      projectId: 'coral-shift-138423',
      storageBucket: 'coral-shift-138423.appspot.com',
      messagingSenderId: '395196400266'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({loggedIn: true});
      else
        this.setState({loggedIne: false});
    });
  }

  renderLoginFormOrLogOutButton() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            title="Log out"
            onPress={() => firebase.auth().signOut()}
          />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication"/>
        {this.renderLoginFormOrLogOutButton()}
      </View>
    );
  }
}
