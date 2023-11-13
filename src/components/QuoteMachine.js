import React from 'react';
import { handleAsync } from '../actions/quoteMachineActions';
import { connect } from 'react-redux';

// Define state and dispatch mapping
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        submitQuoteRequest: () => {
            dispatch(handleAsync());
        }
    }
};

// Define presentational component
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.handleQuoteRequest = this.handleQuoteRequest.bind(this);
    }
    componentDidMount() {
        this.props.submitQuoteRequest();
    }
    handleQuoteRequest() {
        this.props.submitQuoteRequest();
    }
    render() {
        document.querySelector('body').style.backgroundColor = this.props.color; 
        return (
            <div className='quote-box' id='quote-box'>
                <p className={this.props.fetching ? 'quote fadeOut' : 'quote fadeIn'} id='text' style={{color: this.props.color}}>{ this.props.quote.content }</p>
                <p className={this.props.fetching ? 'author fadeOut' : 'author fadeIn'} id='author' style={{color: this.props.color}}>{ this.props.quote.author }</p>
                <button style={{backgroundColor: this.props.color}} onClick={this.handleQuoteRequest} disabled={ this.props.fetching }>Next Quote</button>
            </div>
        );
    }
}

// Connect component to store
const QuoteMachine = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default QuoteMachine;