import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({ now: new Date().toISOString() })
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
