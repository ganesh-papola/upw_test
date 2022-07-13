import { connect } from "react-redux";
// import { updateOrderDetails } from "src/redux/actions";
import Dashboard from "./Dashboard";

const mapStateToProps = (state) => {
  return {
    orderDetails: state.common.orderDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
