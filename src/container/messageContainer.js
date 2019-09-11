import Chatspace from '../commponent/chatRoom'
import {connect} from "react-redux";

const mapStateToProps = (state)=>({
    mL: state.mL
})
export default connect(mapStateToProps)(Chatspace)