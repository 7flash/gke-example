import assert from 'assert'
import visitorsFactory from '../src/visitors'

describe('Visitors', () => {
  it('should save visitor', () => {
    const visitors = visitorsFactory()

    visitors.push()
    visitors.push()

    assert.equal(visitors.getAll().length, 2)
  })

  it('should filter visitors by period', (done) => {
    const visitors = visitorsFactory()

    visitors.push()

    setTimeout(() => {
      visitors.push()

      const now = Number(new Date())

      assert.equal(visitors.filterByPeriod(now - 200, now).length, 2)
      assert.equal(visitors.filterByPeriod(now - 50, now).length, 1)

      done()
    }, 100)
  })
})
