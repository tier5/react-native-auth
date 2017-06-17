import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";
import firebase from "firebase";
import {Button, Card, CardSection, Input, Spinner} from "./common";

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0
  }
});

export default class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', error: '', loading: false});
  }

  onLoginFail() {
    this.setState({error: "Authentication failure.", loading: false});
  }

  renderButtonOrSpinner() {
    if (this.state.loading)
      return <Spinner size="small"/>;
    return (
      <Button
        title="Log in"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.io"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    );
  }
}
