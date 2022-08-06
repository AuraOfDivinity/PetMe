module.exports = (app) => {
  require('./pets')(app)
  require('./orgs')(app)
  require('./upload')(app)
}