import { connect } from "react-redux";
import { signIn } from "src/redux/actions";
import Login from "./login";

const mapStateToProps = (state) => {
  return {
    loginFailed: state?.auth?.error?.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (payload) => dispatch(signIn(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
