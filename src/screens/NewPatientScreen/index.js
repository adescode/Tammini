import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
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
  List,
  ListItem
} from 'native-base';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

export class NewPatientScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  OpenPatient =()=>{
   this.props.navigation.navigate('NumbFormScreen')  
  }

  render() {
    return (
      <Container>
        <Header transparent style={{margin:10}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                type='MaterialCommunityIcons'
                name='keyboard-backspace'
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
            <View style={{ width, paddingHorizontal: 10 }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 30, marginVertical: 5 }}
              >
                Select Patient
              </Text>
            </View>
          </Card>
          <Card transparent style={{ width, padding: 20 }}>
            <TouchableHighlight onPress={()=>this.OpenPatient()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  backgroundColor: '#f1f1f1',
                  padding: 15,
                  borderRadius: 5
                }}
              >
                <Thumbnail
                  small
                  source={require('../../assets/images/circle.png')}
                />
                <View style={{ padding: 5, paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: 20 }}>Kumar Pratik</Text>
                </View>
              </View>
            </TouchableHighlight>
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
                Add New Patient
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
)(NewPatientScreen);
