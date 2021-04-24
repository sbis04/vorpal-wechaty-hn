import { Wechaty }        from 'wechaty'
import { WechatyVorpal }  from 'wechaty-vorpal'
const hackerNews = require('vorpal-hacker-news')

const wechaty = new Wechaty()

wechaty.use(
  WechatyVorpal({
    use: hackerNews,
  }),
)

wechaty.start()