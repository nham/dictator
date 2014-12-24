/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var Block = require('./Block.react');
//var TodoHelpers = require('../actions/TodoHelpers');

var RightSide = React.createClass({

  /**
   * @return {object}
   */
  render: function() {

    var affine_isom_content = "An <b>affine isometry</b> is an affine transformation $\mathbb{R}^n \to \mathbb{R}^n$ which is also an isometry.";
    var translation = "A <b>translation</b> is any function \mathbb{R}^n \to \mathbb{R}^n$ defined by $x \mapsto x + v$ for some $latex v \in \mathbb{R}^n$";
    var central_isom = "A <b>central isometry</b> is an isometry of $\mathbb{R}^n$ that fixes the origin.";
  	return (
      <div id="right">
        <Block content={affine_isom_content} />
        <Block content={translation} />
        <Block content={central_isom} />
      </div>
    );
  }

});

module.exports = RightSide;
