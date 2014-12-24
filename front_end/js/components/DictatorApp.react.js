var LeftSide = require('./LeftSide.react');
var RightSide = require('./RightSide.react');
var React = require('react');
var DictStore = require('../stores/DictStore');


var DictatorApp = React.createClass({
  // believe we need to send an action to the dispatcher on Mount of this
  // component
  //

  /**
   * @return {object}
   */
  render: function() {
  	return (
      <div>
        <LeftSide />
        <RightSide />
      </div>
  	);
  }

});

module.exports = DictatorApp;
