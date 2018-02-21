// import { iframeComponent } from './x-components'
import foo from './foo';

// const url = 'http://localhost:3000/iframe.html'
// const tag = 'iframe-component'

// const iframe = iframeComponent(tag, url)
// console.log(iframe)

const track = () => {
  console.log('TRACK');
};

const saveToLocalStorage = () => {
  console.log('SAVE-TO-LOCAL-STORAGE');
};

const setCookie = () => {
  console.log('SET-COOKIE');
};

const pp = {
  foo: {
    render: (props, element) => {
      foo.render(
        {
          ...props,
          track,
          saveToLocalStorage,
          setCookie,
        },
        element,
      );
    },
  },
};

// window.pp = pp
const aaaa = document.getElementsByClassName('shoplist')[0];
if (aaaa) {
  pp.foo.render({}, aaaa);
}
