import React, {Component} from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {hasErrored: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/iRjGBZj.png' />
          <ErrorImageText>Sorry, something gone wrong...</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
