import { connect } from "react-redux";
import { getFavs } from "../../../redux/usersSlice";
import SavedContainer from "./SavedContainer";

function mapStateToProps(state){
    // console.log(state.roomsReducer);
    return { rooms: state.roomsReducer.favs };
}

function mapDispatchToProps(dispatch){
    return {
        getFavs: () => dispatch(getFavs())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);