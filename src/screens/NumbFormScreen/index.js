import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
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
  Thumbnail
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class NumbFormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  render() {
    return (
      <Container>
        <Header transparent style={{margin:10}}/>
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
            <Card transparent>
              <View
                style={{
                  // flex:1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                  height: 50,
                  borderRadius: 5,
                  borderColor: '#57575757',
                  borderWidth: 1
                }}
              >
                <View
                  style={{
                    height: 40,
                    justifyContent: 'center',
                    borderRightColor: '#57575757',
                    borderRightWidth: 1,
                    overflow: 'hidden'
                  }}
                >
                  <Text style={{padding:10}}>+1</Text>
                </View>
                  <TextInput
                    onChangeText={text => this.setState({ text })}
                    value={this.state.value}
                    placeholder={'Mobile Number'}
                    style={{flex:1, fontSize:16, padding:5}}
                    keyboardType={'numeric'}
                    maxLength = {20}
                  />
              </View>
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
