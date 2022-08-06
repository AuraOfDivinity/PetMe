const db = require('../database/instance')

const Organization = db.Organization

const get_all_orgs = async () => {
  try {
    let found_orgs = await Organization.findAll()
    return found_orgs
  } catch (e) {
    console.log(e)
  }
}

const create_org = async (data) => {
  try {
    let created_org = await Organization.create(data)
    return created_org
  } catch (e) {
    console.log(e)
  }
}

const update_org = async (id, data) => {
  try {
    let updated_org = await Organization.update(
    data,
  {
    where: { id: id },
  })
    let found_org = await Organization.findOne({
    where: { id: id }})

    return found_org
  } catch (e) {
    console.log(e)
  }
}

const delete_org = async (id) => {
  try {
    let deleted_org = await Organization.destroy({ where: { id: id } })
    return deleted_org
  } catch (e) {

  }
}

module.exports = {
  get_all_orgs,
  create_org,
  update_org,
  delete_org
}