import React from 'react';
import '../styles/tab.scss';

export default class TabButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(event) {
        console.log(event.target)
        this.props.tabPressed(this.props.index); // pass any argument to the callback
    }

    render() {
        return (
            <button className='tab-button' onClick={this.handleClick.bind(this)}>
                {this.props.title}
            </button>
        )
    }
}