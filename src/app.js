import path from 'path'
import express from 'express'
import handlebars from 'express-handlebars'
import visitorsFactory from './visitors'

const ONE_MINUTE = 60 * 1000

const app = express()
const visitors = visitorsFactory()

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, 'views'))

app.get('/', (req, res) => {
    visitors.push()

    const now = Number(new Date())

    const visitorsInLastMinute = visitors.filterByPeriod(now - ONE_MINUTE, now)
    const pageviews = visitorsInLastMinute.length

    res.render('pageviews', { pageviews })
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
