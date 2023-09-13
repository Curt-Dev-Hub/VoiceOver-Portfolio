import React from 'react';
import ErrorPage from "../errorHandling/ErrorPage";
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error
    console.log(error, errorInfo);
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage /> 
    }
    return this.props.children;
    }
}

<ReactErrorBoundary FallbackComponent={ErrorPage}>
  <MyErrorBoundary>
    <ErrorPage />
  </MyErrorBoundary>
</ReactErrorBoundary>

export default MyErrorBoundary;