import Footer from '../commponent/footer'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    dispatch:dispatch
})
const mapStateToProps = (state)=>({
    convId:state.convId
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)