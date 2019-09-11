import ConvList from '../commponent/convList'
import {connect} from "react-redux"

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

const mapStateToProps = (state) => ({
    conversationList:state.conversationList
})

export default connect(mapStateToProps,mapDispatchToProps)(ConvList)