import React from 'react'
import { bindActionCreators, connect } from 'redux-redux'
import {buyCake} from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>Nummber of cakes: {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake(), )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)