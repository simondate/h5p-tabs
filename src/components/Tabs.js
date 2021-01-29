import React from 'react';
import TabButton from './TabButton';
import '../styles/tab.scss';

export default class TabsContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            currentTab: 0
        }
        this.tabPressed = this.tabPressed.bind(this);
      }

    tabPressed(index) {
        console.log(index)
        this.setOpenTab(index);
    }

    setOpenTab(index) {
        this.setState({currentTab: index});
    }

    render() {
        const tabButtons = this.props.content.map((tabContent, index) =>
            <TabButton 
                key={index}
                index={index}
                title={tabContent.title} 
                tabPressed={this.tabPressed}
            />
        );

        console.log(this.state.currentTab)
        const displayText = this.props.content[this.state.currentTab].content.params.text;

        return (
            <div className='h5p-tabs-inner'>
                <div className='tabs-button-container'>
                    {tabButtons}
                </div>
                <div className='tab-display'>
                    <div className='tab-display-inner' dangerouslySetInnerHTML={{__html: displayText}}>
                    </div>
                </div>
            </div>
        )
    }
}