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
  H2
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class PregScreen extends Component  {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header transparent style={{margin:10}}/>
      <Content contentContainerStyle={{flex: 1 }}>
            <Card transparent style={{ width, position:"absolute", bottom:50, padding:10 }}>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <Left>
                  <Thumbnail
                    source={require('../../assets/images/circle.png')}
                  />
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <Left>
                  <Text style={{fontWeight:"900", fontSize:20}}>Are you pregnant?</Text>
                </Left>
              </CardItem>
              <Card transparent padder>
                <Button block bordered style={{margin:10, borderRadius: 5}}
                onPress={() => this.props.navigation.navigate('NumbFormScreen')}
                >
                <Text>My Self</Text>
              </Button>
              <Button block bordered style={{margin:10, borderRadius: 5, borderColor: "#57575757"}}>
                <Text>Someone else</Text>
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
)(PregScreen);
