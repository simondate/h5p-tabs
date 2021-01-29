import React from 'react';
import '../styles/tab.scss';

export default class TabButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(event) {
        this.props.tabPressed(this.props.index);
    }

    render() {
        return (
            <button className='tab-button' onClick={this.handleClick.bind(this)}>
                {this.props.title}
            </button>
        )
    }
}