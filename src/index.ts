import { Wechaty }        from 'wechaty'
import { WechatyVorpal }  from 'wechaty-vorpal'
import hackerNews         from 'vorpal-hacker-news'

const wechaty = new Wechaty()

wechaty.use(
  WechatyVorpal({
    use: hackerNews,
  }),
)

wechaty.start()