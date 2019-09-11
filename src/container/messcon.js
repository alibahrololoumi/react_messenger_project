import Messagebox from '../commponent/messagebox'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    mL:state.mL
})

export default connect(mapStateToProps)(Messagebox)