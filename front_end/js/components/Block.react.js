var React = require('react');

var Block = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    var style = {
        'background-color': '#fff',
        'border-bot': '1px solid #ff7fff',
        'padding': '6px'
    };

    return (
      <div className="block" style={style} 
           dangerouslySetInnerHTML={{__html: this.props.content}} />
    );
  },

});

module.exports = Block;
