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
  Thumbnail,
  H2
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class DobScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header transparent style={{margin:10}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon type='MaterialCommunityIcons' name='keyboard-backspace' style={{ color: '#509CE2', fontWeight: 'bold', fontSize:30}} />
            </Button>
          </Left>
          <Body/>
          <Right/>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <Card
            transparent
            style={{ width, position: 'absolute', bottom: 50, padding: 10 }}
          >
            <CardItem style={{ backgroundColor: 'transparent' }}>
              <Left>
                <Thumbnail source={require('../../assets/images/circle.png')} />
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: 'transparent' }}>
              <Left>
                <Text style={{ fontWeight: '900', fontSize: 20 }}>
                  Enter your date of birth.
                </Text>
              </Left>
            </CardItem>
            <Card transparent padder>
              <View
                style={{
                  flex:1,
                  flexDirection:"row",
                  alignItems: "center",
                  margin: 10,
                  height: 50,
                  borderRadius: 5,
                  borderColor: '#57575757',
                  borderWidth: 1
                }}
              >
                <Icon type="MaterialCommunityIcons" name="calendar-blank" style={{padding:10, color: '#575757'}} />
                <TextInput
                  onChangeText={text => this.setState({ text })}
                  value={this.state.value}
                  placeholder={'Your birth date'}
                  dataDetectorTypes={'calendarEvent'}
                  multiline={true}
                  editable={false}
                />
              </View>
              <Button
                block
                style={{
                  margin: 10,
                  borderRadius: 5,
                  borderColor: '#57575757'
                }}
                onPress={() => this.props.navigation.navigate('GenderScreen')}
              >
                <Text  style={{color:'#FFFFFF', fontWeight: '500'}}>Done</Text>
              </Button>
            </Card>
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
)(DobScreen);
