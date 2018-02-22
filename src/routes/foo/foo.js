/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import xcomponent from 'xcomponent/dist/xcomponent.js'


if(typeof(window) === "object"){
  let xcomponent = require('xcomponent/dist/xcomponent.js')
  xcomponent.create({
      tag: 'my-login-component',
      url: 'http://localhost:3000/foo',
  });
}

class Foo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Foo;
