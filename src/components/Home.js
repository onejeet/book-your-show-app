import React, { PureComponent }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends PureComponent{
    render(){
        const { shows } = this.props;
        return (
            <div className="home">
                <Link to="/dashboard"><button>Dashboard</button></Link>
                <h3>Select the Show</h3>
                <div className="show-list">
                {shows && shows.map((show) => 
                        <Link key={show.id} to={`/show?id=${show.id}`} >
                            <div id={show.id} className="show">
                            Show - {show.id}
                            </div>
                        </Link>
                    )
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        shows : state.shows.showList
    }
}

export default connect(mapStateToProps)(Home);