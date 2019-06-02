import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  // Text,
  Card
} from 'native-base';

export class CompleteFormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={{ flex: 1, margin: 0, padding: 0 }}>
      <Header transparent />
      <Content
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <Card>
          <View>
            <Icon type="AntDesign"  name="checkcircle" style={{fontSize:200}} color={'#FFFFFF'} />
          </View>
        </Card>
        </Content>
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteFormScreen);
