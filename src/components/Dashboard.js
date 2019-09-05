import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AmountDetails from './AmountDetails';


const Dashboard = (props) => {
    return (
        <div className="payments">
            <h3>Total Revenue Generated</h3>
            <AmountDetails
            amt = {props.totalRevenue}
            /> 
            <Link to="/"><button>Return To Home</button></Link>          
        </div>
    );
}

function mapStateToProps(state){
    return {
        totalRevenue : state.revenue.sales
    }
}

export default connect(mapStateToProps)(Dashboard);