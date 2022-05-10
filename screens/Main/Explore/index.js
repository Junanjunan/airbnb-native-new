import { connect } from "react-redux";
import ExploreContainer from "./ExploreContainer";
import { getRooms } from "../../../redux/roomsSlice";


function mapStateToProps(state){
    // console.log(state.roomsReducer);
    return state.roomsReducer.explore;
}

function mapDispatchToProps(dispatch){
    return {
        getRooms: () => dispatch(getRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);