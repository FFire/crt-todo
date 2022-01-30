import { ReactNode } from 'react';

interface ISpinnerProps {
  isLoading?: boolean;
  children?: ReactNode;
}

// export const WithSpinner = (WrappedComponent: JSX.IntrinsicAttributes):
//   React.ComponentClass => class extends React.Component {
//   render(): JSX.Element {
//     const isLoading : ISpinnerProps = this.props;

//     return (isLoading)
//       ? <Spinner />
//       : <WrappedComponent {...this.props} />;
//   }
// };
