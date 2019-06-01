import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
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
  Text
} from 'native-base';
// import { Col, View, View } from 'react-native-easy-View';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class LangFormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, minHeight: height / 2.5 }} />
            <View style={{ flex: 1 }}>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: 'transparent' }}>
                  <Left>
                    <Thumbnail
                      large
                      source={require('../../assets/images/circle.png')}
                      size={200}
                    />
                  </Left>
                </CardItem>
                <CardItem style={{ backgroundColor: 'transparent' }}>
                  <Left>
                    <H2>App Language?</H2>
                  </Left>
                </CardItem>
                <Card transparent padder>
                  <Button block bordered style={{margin:10, borderRadius: 5}}
                  onPress={() => this.props.navigation.navigate('NumbFormScreen')}
                  >
                  <Text>English</Text>
                </Button>
                <Button block full bordered style={{margin:10, borderRadius: 5}}>
                  <Text>Arabic</Text>
                </Button>
                </Card>
                
              </Card>
            </View>
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
)(LangFormScreen);
