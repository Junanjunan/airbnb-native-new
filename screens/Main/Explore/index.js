import { connect } from "react-redux";
import ExploreContainer from "./ExploreContainer";
import { getRooms, increasePage } from "../../../redux/roomsSlice";


function mapStateToProps(state){
    // console.log(state.roomsReducer);
    return state.roomsReducer.explore;
}

function mapDispatchToProps(dispatch){
    return {
        getRooms: page => dispatch(getRooms(page)),
        increasePage: () => dispatch(increasePage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);