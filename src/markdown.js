import MarkdownIt from 'markdown-it'
import Hashtags from 'markdown-it-hashtag'

const options = { html: true, linkify: true }
const markdown = new MarkdownIt(options).use(Hashtags)
const rules = markdown.renderer.rules

rules.hashtag_open = (t, i) => `<a href="#${t[i].content.toLowerCase()}">`
rules.hashtag_text = (t, i) => t[i].content
rules.hashtag_close = (t, i) => '</a>'

rules.link_open = (t, i, o, e, s) => {
  const hrefIndex = t[i].attrIndex('href')
  const targetIndex = t[i].attrIndex('target')
  const isNotHashtagLink = t[i].attrs[hrefIndex][1].indexOf('#') !== 0
  if (isNotHashtagLink) {
    if (targetIndex < 0) t[i].attrPush(['target', '_blank'])
    else t[i].attrs[targetIndex][1] = '_blank'
  }
  return s.renderToken(t, i, o)
}

export default markdown
