import React from 'react'
import ReactDOM from 'react-dom';
import TabsContainer from '../styles/components/tabs';


H5P.Tabs = (function ($) {

  function Tabs(params, contentId, contentData) {
    this.params = params;
    this.contentId = contentId;
    this.cotnentData = contentData;
    H5P.EventDispatcher.call(this);
  }

  // Tabs.prototype = Object.create(H5P.EventDispatcher.prototype);
  // Tabs.prototype.constructor = Tabs;

  /**
   * Append field to wrapper.
   * @param {jQuery} container the jQuery object which this module will attach itself to.
   */
  Tabs.prototype.attach = function ($container) {
    $container.html('').addClass('h5p-tabs').append(self.$content);

    ReactDOM.render(
      <TabsContainer content={this.params}/>,
      document.getElementsByClassName('h5p-tabs')[0]
    )
  };


  return Tabs;
})();

