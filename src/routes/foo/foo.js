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
console.log(process.env.NODE_ENV)
// if(process) {
//   let xcomponent = require('xcomponent/dist/xcomponent.js')
//   xcomponent.create({
//       tag: 'my-login-component',
//       url: 'http://localhost:3000/foo',
//   });
// }
class foo extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default foo;
