import express from 'express'
import visitorsFactory from './visitors'

const app = express()
const visitors = visitorsFactory()

const ONE_MINUTE = 60 * 1000

app.get('/', (req, res) => {
    visitors.push()

    const now = Number(new Date())
    const visitorsInLastMinute = visitors.filterByPeriod(now - ONE_MINUTE, now)
    const pageviews = visitorsInLastMinute.length

    res.json({ pageviews })
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
