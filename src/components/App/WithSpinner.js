import React from 'react';
import { Spinner } from '../components';

export const WithSpinner = (WrappedComponent) => class extends React.Component {
  render() {
    const { isLoading } = this.props;

    return (isLoading)
      ? <Spinner {...this.props}/>
      : <WrappedComponent {...this.props} />;
  }
};
