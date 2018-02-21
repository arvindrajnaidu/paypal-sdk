import xcomponent from 'xcomponent/dist/xcomponent.js';

export const iframeComponent = (tag, url) =>
  xcomponent.create({
    tag,
    url,
  });

export const buttonComponent = url =>
  xcomponent.create({
    tag: 'button-component',
    url,
    contexts: {
      popup: true,
    },
  });
