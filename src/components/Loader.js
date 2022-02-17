import * as React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";

const Loader = (props) => {
  return <Spinner visible={props.loading} cancelable={true} />;
};

const mapStateToProps = (state) => ({
  loading: state.loader.isShow,
});

export default connect(mapStateToProps)(Loader);
