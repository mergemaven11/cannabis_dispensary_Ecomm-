import App, { Container } from 'next/app';
import 'cross-fetch/polyfill';
import Head from 'next/head';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import GlobalStyle from 'components/layout/global-style';
import Navigation from 'components/layout/navigation/index';

import theme from 'utils/theme';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Container>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              <Wrapper>
                <Navigation />
                <Component {...pageProps} />
              </Wrapper>
            </React.Fragment>
          </ThemeProvider>
        </Container>
      </ApolloProvider>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
