/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
 import {
//   SafeAreaView,
  StyleSheet,
//   ScrollView,
   View,
   Text,
//   StatusBar,
 } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from "react-native-firebase";
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDnyPd9mH2q6lGjX43OWeRVwojjgGDqQUA",
  
  firebase_url: "https://mailverification-ae41e.firebaseio.com",
  
  projectId: "mailverification-ae41e",
  
  storage_bucket: "mailverification-ae41e.appspot.com",
   messagingSenderId: "337449490428"
};
firebase.initializeApp(config);

const App = () => {

  constructor(props)
  {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  return (
        <Container style={styles.container}>
        <Form>
        <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button full rounded>
            <Text>SignIn</Text>
          </Button>
          <Button full rounded success style={{ marginTop: 20 }} onPress={() => this.SignUp(this.state.email, this.state.password)}> <Text >Signup</Text>
</Button>
        </Form>
      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  }
  });

export default App;
