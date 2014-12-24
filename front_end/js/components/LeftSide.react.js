var React = require('react');
var Portal = require('./Portal.react');

var LeftSide = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="left">
The collection of <Portal text="affine isometries" /> is exactly the set of all compositions $t \circ k$ where $t$ is a <Portal text="translation" /> and $k$ is a <Portal text="central isometry" />.
      </div>
    );
  }

});

module.exports = LeftSide;
