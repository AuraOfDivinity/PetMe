const express = require('express');
const { get_all_orgs, create_org, delete_org, update_org } = require('../controllers/org.js')


module.exports = (app) => {
  const router = express.Router();

  router.get('/all', async (req, res, next) => {
    const get_all_orgs_response = await get_all_orgs()

    return res.status(200).json({ status: true, message: "All Orgs Fetched Successfully!", data: get_all_orgs_response })
  })

  router.post('/', async (req, res, next) => {
    const created_org = await create_org(req.body)

    return res.status(201).json({ status: true, message: "Organization successsfully created.", data: created_org })
  })

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const deleted_org = await delete_org(id)

    return res.status(200).json({ status: true, message: "Org successsfully deleted." })
  })

  router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    const updated_org = await update_org(id, data)
    if(!updated_org){
          return res.status(400).json({ status: true, message: "No Org found by the provided ID."})
    }

    return res.status(200).json({ status: true, message: "Org successsfully updated.", data: updated_org })
  })

  app.use('/orgs', router)
}