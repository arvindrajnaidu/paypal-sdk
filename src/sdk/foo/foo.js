import xcomponent from 'xcomponent/dist/xcomponent.js'

const foo = xcomponent.create({
  tag: 'my-login-component',
  url: 'http://localhost:3000/foo',
  prerenderTemplate() {
    const html = document.createElement('html');
    html.innerHTML = '<body><h1>hi</h1></body>'
    return html
  },
});

export default foo
