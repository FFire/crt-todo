import React from 'react';
import { Spinner } from '../components';

export function WithSpinner(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { isLoading } = this.props;

      return (isLoading)
        ? <Spinner {...this.props}/>
        : <WrappedComponent {...this.props} />;
    }
  };
}
