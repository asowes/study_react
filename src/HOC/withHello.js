function withHello(WrappedComponent) {
  return (props) => {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
}

export default withHello;
