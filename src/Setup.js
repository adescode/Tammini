import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from './theme/native-base-theme/components';
import variables from './theme/native-base-theme/variables/variables';
import Root from './Root';

class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.props.store}>
          <Root />
        </Provider>
      </StyleProvider>
    );
  }
}

export default Setup;
