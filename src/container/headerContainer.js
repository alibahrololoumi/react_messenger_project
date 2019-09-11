import Header from '../commponent/headerscan'
import {connect} from "react-redux";

const mapStateToProps = (state)=>({
    name:state.name
})
export default connect(mapStateToProps)(Header)