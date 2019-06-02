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
import CodeInput from 'react-native-confirmation-code-field';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;
export class PassFormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };
  }
  handlerOnFulfill = code => this.setState({ result: code });
  cellProps = ({ /*index, isFocused,*/ hasValue }) => {
    if (hasValue) {
      return {
        style: {
          borderRadius: 3,
          borderWidth: 1,
          borderColor: 'blue',
          // backgroundColor: '#030c31',
          fontSize: 20
          // fontWeight: '700'
        }
      };
    }

    return {
      style: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey',
        // backgroundColor: '#030c31',
        fontSize: 30
        // fontWeight: '700'
      }
    };
  };

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
                Activate Your Number
              </Text>
              <Text style={{ fontSize: 12, marginVertical: 5 }}>
                Please enter your active code
              </Text>
            </View>
            <Card transparent style={{ padding: 7 }}>
              <CardItem>
                <CodeInput
                  variant={'border-box'}
                  inputPosition={'center'}
                  activeColor={'blue'}
                  // inactiveColor={'grey'}
                  codeLength={6}
                  autoFocus={true}
                  keyboardType='numeric'
                  cellProps={this.cellProps}
                  onFulfill={this.handlerOnFulfill}
                />
              </CardItem>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  width,
                  alignSelf: 'center'
                }}
              >
                <Button transparent style={{ alignSelf: 'center' }}>
                  <Text style={{ textAlign: 'center', color: '#509CE2' }}>
                    Resend Code
                  </Text>
                </Button>
              </View>
            </Card>
          </Card>
          <View
            style={{ width, position: 'absolute', bottom: 20, padding: 10 }}
          >
            <Button
              block
              style={{ margin: 10, borderRadius: 5 }}
              onPress={() => this.props.navigation.navigate('CompleteFormScreen')}
            >
              <Text
                style={{
                  margin: 10,
                  borderRadius: 5,
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Done
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
)(PassFormScreen);
