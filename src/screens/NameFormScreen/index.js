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
import { hidden } from 'ansi-colors';

const { width, height } = Layout.window;

export class NameFormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
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
                Hello!
              </Text>
              <Text style={{ fontSize: 12, marginVertical: 5 }}>
                What's your name?
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
                  <TextInput
                    onChangeText={text => this.setState({ text })}
                    value={this.state.value}
                    placeholder={'Your name'}
                    style={{flex:1, fontSize:16, paddingHorizontal:20}}
                    maxLength = {30}
                  />
              </View>
            </Card>
          </Card>
          <View
            style={{ width, position: 'absolute', bottom: 20, padding: 10 }}
          >
            <Button
              block
              style={{ margin: 10, borderRadius: 5 }}
              onPress={() => this.props.navigation.navigate('NumbFormScreen')}
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
)(NameFormScreen);
