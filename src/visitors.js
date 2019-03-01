const visitors = () => {
  const model = []

  const push = (visitor = {}) => {
    model.push({
      ...visitor,
      time: new Date()
    })
  }

  const getAll = () => {
    return model
  }

  const filterByPeriod = (start, end) => {
    return model.filter((visitor) => {
      return visitor.time >= start && visitor.time <= end
    })
  }

  return {
    push, getAll, filterByPeriod
  }
}

export default visitors
