const db = require('../database/instance')

const Pets = db.Pets

const get_all_pets = async () => {
  try {
    let found_pets = await Pets.findAll()
    console.log(found_pets, "found")
    return found_pets
  } catch (e) {
    console.log(e)
  }
}

const create_pet = async (data) => {
  try {
    let created_pet = await Pets.create(data)
    return created_pet
  } catch (e) {
    console.log(e)
  }
}

const update_pet = async (data) => {
  try {
    let created_pet = await Pets.create(data)
    return created_pet
  } catch (e) {
    console.log(e)
  }
}

const delete_pet = async (id) => {
  try {
    let deleted_pet = await Pets.destroy({ where: { id: id } })
    return deleted_pet
  } catch (e) {

  }
}

module.exports = {
  get_all_pets,
  create_pet,
  delete_pet
}