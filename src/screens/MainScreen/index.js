import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Thumbnail,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    // this.props.navigation.navigate('LangFormScreen')
  }

  render() {
    return (
      <Container>
        <Header transparent style={{margin:10}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.toggleDrawer()}>
              <Icon
                type='MaterialCommunityIcons'
                name='menu'
                style={{ color: '#509CE2', fontWeight: 'bold', fontSize: 30 }}
              />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
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
                New Complain.
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
                  placeholder={'Mobile Number'}
                  style={{ flex: 1, fontSize: 16, padding:10 }}
                  keyboardType={'numeric'}
                  maxLength={20}
                />
                  <Icon name='search' style={{padding:10}}/>
               
              </View>
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
                Start
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
)(MainScreen);
