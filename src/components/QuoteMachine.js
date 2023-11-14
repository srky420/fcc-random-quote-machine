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
        // Color styles from props
        const textStyles = {
            color: this.props.color
        }
        const buttonStyles = {
            backgroundColor: this.props.color
        }
        document.querySelector('body').style.backgroundColor = this.props.color;
        return (
            <div className='quote-box' id='quote-box'>
                <p className={this.props.fetching ? 'quote fadeOut' : 'quote fadeIn'} id='text' style={textStyles}><i className='fa fa-quote-left'></i> { this.props.quote.content } <i className='fa fa-quote-right'></i></p>
                <p className={this.props.fetching ? 'author fadeOut' : 'author fadeIn'} id='author' style={textStyles}>- { this.props.quote.author }</p>
                <div className='btn-div'>
                    <div className='socials'>
                        <a className='link' id='' style={buttonStyles} href='https://www.twitter.com/intent/tweet' rel='noreferrer' target='_blank'><div className='overlay'></div><i className='fa fa-twitter'></i></a>
                    </div>
                    <button id='new-quote' className='btn' style={buttonStyles} onClick={this.handleQuoteRequest} disabled={this.props.fetching}><div className='overlay'></div>Next Quote</button>
                </div>
                <p className='creator'>By <a href='https://www.linkedin.com/in/shahrukh-khan-2b8968242/' target='_blank' rel='noreferrer'>Shahrukh</a></p>
                <p className='created'>Created in React and Redux</p>
            </div>
        );
    }
}

// Connect component to store
const QuoteMachine = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default QuoteMachine;