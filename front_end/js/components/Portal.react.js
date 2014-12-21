var React = require('react');

var Portal = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    var style = {
        'background-color': '#ffff7f',
        'border': '1px dotted #333'
    };

    return (
      <span className="portal" style={style}>
          {this.props.text}
      </span>
    );
  },

});

module.exports = Portal;
