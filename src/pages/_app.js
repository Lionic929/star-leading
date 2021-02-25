import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../utils/i18n';

import initStore from '../utils/redux';

const isDev = process.env.NODE_ENV === 'development';

const themeUi = {
  ...createMuiTheme({
    palette: {
      primary: {
        main: '#6100FF',
        light: '#E0EBFF',
        dark: '#3f19a5',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FF782D',
        light: '#ff9357',
        dark: '#b2541f',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: ['"Blender Pro"', 'sans-serif'].join(','),
    },
  }),
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={themeUi}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: isDev })(MyApp);
