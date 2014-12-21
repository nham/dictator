var React = require('react');

var Portal = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div class="portal" style="background-color: #ffff7f">
          {this.props.text}
      </div>
    );
  },

});

module.exports = Portal;
