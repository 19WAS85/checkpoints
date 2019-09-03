import MarkdownIt from 'markdown-it'
import Hashtags from 'markdown-it-hashtag'

const options = { html: true, linkify: true }
const markdown = new MarkdownIt(options).use(Hashtags)
const rules = markdown.renderer.rules

markdown.renderer.rules.link_open = (t, i, o, e, s) => {
  const index = t[i].attrIndex('target')
  if (index < 0) t[i].attrPush(['target', '_blank'])
  else t[i].attrs[index][1] = '_blank'
  return s.renderToken(t, i, o)
}

rules.hashtag_open = (t, i) => `<a href="#${t[i].content.toLowerCase()}">`
rules.hashtag_text = (t, i) => t[i].content
rules.hashtag_close = (t, i) => '</a>'

export default markdown
