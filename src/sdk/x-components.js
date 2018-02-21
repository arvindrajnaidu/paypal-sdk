import xcomponent from 'xcomponent/dist/xcomponent.js'

export const iframeComponent = (tag, url) => {
  return xcomponent.create({
    tag: tag,
    url: url
  })
}

export const buttonComponent = (url) => {
  return xcomponent.create({
    tag: 'button-component',
    url: url,
    contexts: {
      popup: true
    }
  })
}
