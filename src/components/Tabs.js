import React from 'react';
import TabButton from './TabButton';
import '../styles/tab.scss';

export default class TabsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
        this.tabPressed = this.tabPressed.bind(this);
      }

    tabPressed(index) {
        this.setOpenTab(index);
    }

    setOpenTab(index) {
        this.setState({currentTab: index});
    }

    componentDidMount() {
        let context = this;
        setTimeout(function(){
            context.props.H5PTabs.trigger('resize');
        }, 10);
    }

    componentDidUpdate() {
        let context = this;
        setTimeout(function() {
            context.props.H5PTabs.trigger('resize');
        }, 10);
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

        const displayText = this.props.content[this.state.currentTab].content.params.text;
        let graphic = this.props.content[this.state.currentTab].graphic;

        if(graphic) {
            graphic.path = H5P.getPath(graphic.path, this.props.contentId);
        }

        return (
            <div className='h5p-tabs-inner'>
                <div className='tabs-button-container'>
                    {tabButtons}
                </div>
                <div className='tab-display'>
                    <div className='tab-display-inner'>
                        <div className='tab-display-text' dangerouslySetInnerHTML={{__html: displayText}} />
                        {graphic &&
                            <div className="tab-graphic">
                                <img src={graphic.path}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}