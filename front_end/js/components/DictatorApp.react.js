/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var LeftSide = require('./LeftSide.react');
//var RightSide = require('./RightSide.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');


var DictatorApp = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
  	return (
      <div>
        <LeftSide />
        //<RightSide />
      </div>
  	);
  }

});

module.exports = DictatorApp;
