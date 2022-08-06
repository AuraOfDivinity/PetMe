const express = require('express');
const { get_all_pets, create_pet, delete_pet } = require('../controllers/pets.js')


module.exports = (app) => {
  const router = express.Router();

  router.get('/all', async (req, res, next) => {
    const get_all_pets_response = await get_all_pets()

    return res.status(200).json({ status: true, message: "All Pets Fetched Successfully!", data: get_all_pets_response })
  })

  router.post('/', async (req, res, next) => {
    const created_pet = await create_pet(req.body)
    console.log(created_pet, "created_pet")

    return res.status(201).json({ status: true, message: "Pet successsfully created.", data: created_pet })
  })

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const deleted_pet = await delete_pet(id)

    return res.status(200).json({ status: true, message: "Pet successsfully deleted.", data: deleted_pet })

  })

  app.use('/pets', router)
}