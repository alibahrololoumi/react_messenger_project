import {connect} from "react-redux";
import Conversation from '../commponent/conversationn'

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)
