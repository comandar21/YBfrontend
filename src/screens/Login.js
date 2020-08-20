import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Right,
  Body,
  Title,
  Button,
  Text,
  View,
} from 'native-base';

import Icon from 'react-native-vector-icons';
const Login = () => {
  return (
    // <View>
    //   <Header style={{backgroundColor: '#FFA500'}}></Header>
    //   <View>
    //     <Text> Hello Worl</Text>
    //   </View>
    // </View>

    <Container>
      <Header style={{backgroundColor: 'orange'}}>
        <Left>
          <Button transparent></Button>
        </Left>
        <Body>
          <Title style={{color: 'white'}}>The Yarn Baazar</Title>
        </Body>
        <Right>
          <Button transparent></Button>
        </Right>
      </Header>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Phone No" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
        <Button style={{backgroundColor: '#FFA500', marginLeft: 20}}>
          <Text> Login </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
