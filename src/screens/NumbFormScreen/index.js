import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
  Card,
  CardItem,
  Thumbnail,
  H2,
  Input,
  Item
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class NumbFormScreen extends Component {
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
          <Card transparent style={{ width, padding: 10 }}>
            <View style={{ width, paddingHorizontal: 10, marginVertical: 5 }}>
              <Thumbnail source={require('../../assets/images/circle.png')} />
            </View>
            <View style={{ width, paddingHorizontal: 10, marginVertical: 5 }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5 }}
              >
                Welcome to Tammini
              </Text>
              <Text style={{ fontSize: 12, marginVertical: 5 }}>
                What's your number?
              </Text>
            </View>
            <Card transparent style={{ padding: 7 }}>
              <Item regular style={{ borderRadius: 5 }}>
                <Input placeholder='Mobile Number' keyboardType={'numeric'} />
              </Item>
              <CardItem style={{ paddingHorizontal: 20, marginVertical: 50 }}>
                <Body>
                  <Text style={{ textAlign: 'center' }}>
                    By signing up you will agree to our{' '}
                    <Text style={{ fontWeight: '500' }}>Terms of Use</Text> and{' '}
                    <Text style={{ fontWeight: '500' }}>Privacy Policy</Text>
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Card>
          <View
            style={{ width, position: 'absolute', bottom: 20, padding: 10 }}
          >
            <Button
              block
              style={{ margin: 10, borderRadius: 5 }}
              onPress={() => this.props.navigation.navigate('PassFormScreen')}
            >
              <Text
                style={{
                  margin: 10,
                  borderRadius: 5,
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Next
              </Text>
            </Button>
          </View>
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
)(NumbFormScreen);
