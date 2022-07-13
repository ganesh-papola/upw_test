//libs
import { connect } from "react-redux";

//component
import LoaderHOC from "./LoaderHoc";

const mapStateToProps = (state) => {
  return {
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps)(LoaderHOC);
