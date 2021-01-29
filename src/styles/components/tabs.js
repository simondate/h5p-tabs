import React from 'react';

export default class TabsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0   
        }
      }

    render() {
        return `${(this.state.currentTab)}`
    }
}