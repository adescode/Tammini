import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
  Card,
  CardItem
} from 'native-base';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

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
          <Card transparent style={{flex:1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View>
              <Icon
                type='Ionicons'
                name='ios-checkmark-circle-outline'
                style={{ fontSize: 150, marginVertical:10 }}
                color={'#FFFFFF'}
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{fontSize:30, fontWeight: 'bold'}}>Welcome</Text>
              <Text style={{fontSize:14}}>Thank you for activiting your account.</Text>
            </View>
          </Card>
          <Card transparent style={{flex:1, alignItems: 'center' }}>
          <View
            style={{ width, position: 'absolute', bottom: 50, padding: 10 }}
          >
            <Button
              block
              style={{ margin: 10, borderRadius: 5 }}
              onPress={() => this.props.navigation.navigate('PatientTypeScreen')}
            >
              <Text
                style={{
                  margin: 10,
                  borderRadius: 5,
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Start Assesment
              </Text>
            </Button>
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
