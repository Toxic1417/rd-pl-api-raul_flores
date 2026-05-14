import express from 'express'
import playerController from './playerController.js'

const router = express.Router()

router.post ('/player', playerController.insertPlayer)
router.get ('/players', playerController.findPlayers)
router.get ('/player/:id/get', playerController.findPlayerById)
router.put ('/player/:id/update', playerController.updatePlayerById)
router.delete ('/player/:id/delete', playerController.deletePlayerById)

export default router