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
        const textStyles = {
            color: this.props.color
        }
        const buttonStyles = {
            backgroundColor: this.props.color
        }
        document.querySelector('body').style.backgroundColor = this.props.color; 
        return (
            <div className='quote-box' id='quote-box'>
                <p className={this.props.fetching ? 'quote fadeOut' : 'quote fadeIn'} id='text' style={textStyles}>{ this.props.quote.content }</p>
                <p className={this.props.fetching ? 'author fadeOut' : 'author fadeIn'} id='author' style={textStyles}>- { this.props.quote.author }</p>
                <div className='btn-div'>
                    <div className='socials'>
                        <a className='link' style={textStyles} href='twitter.com/intent/tweet'><i className='fa fa-2x fa-twitter'></i></a>
                        <a className='link' style={textStyles} href='twitter.com/intent/tweet'><i className='fa fa-2x fa-facebook'></i></a>
                    </div>
                    <button id='new-quote' className='btn' style={buttonStyles} onClick={this.handleQuoteRequest} disabled={this.props.fetching}>Next Quote</button>
                </div>
            </div>
        );
    }
}

// Connect component to store
const QuoteMachine = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default QuoteMachine;