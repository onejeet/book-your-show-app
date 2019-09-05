import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCurrentOrder, updateTotalRevenue, updateBookings } from '../actions';
import AmountDetails from './AmountDetails';

class Home extends PureComponent {

    bookSeats = () => {
        this.props.updateTotalRevenue(this.props.currentTotal);
        this.props.updateBookings(this.props.selectedSeats);
        this.props.resetCurrentOrder();
        alert("Woohoo!! Booking is Successful");
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="payments">
                <h3>Current Order Details</h3>
                {
                    this.props.currentTotal.amount !== 0 ?
                    <>
                        <AmountDetails
                        amt = {this.props.currentTotal}
                        />
                        <button onClick={this.bookSeats}>Pay and Book Now</button> 
                    </>
                    :
                    <>
                        <p className="error">No Seats Selected!</p>
                        <Link to="/" ><button>Please Select Seats</button></Link>
                    </>
                }
                
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        selectedSeats : state.currentOrder.selectedSeats,
        currentTotal : state.currentOrder.currentTotal
    }
}

function mapDispatchToState(dispatch){
    return {
        resetCurrentOrder : () => dispatch(resetCurrentOrder()),
        updateTotalRevenue: (amt) => dispatch(updateTotalRevenue(amt)),
        updateBookings: (arr) => dispatch(updateBookings(arr))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Home);