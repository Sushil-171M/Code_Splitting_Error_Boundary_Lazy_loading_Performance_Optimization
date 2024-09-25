import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("error", error);
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ margin: "20px" }}> Something Went Wrong </div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
