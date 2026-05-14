import { ObjectId } from "mongodb"
import client from "../common/db.js"
import Player from "./playerSchema.js"

async function insertPlayer(req, res) {
    let body = req.body
    let player = Player

    player.name = body.name
    player.country = body.country
    player.age = body.age
    player.lastEnglishTeam = body.lastEnglishTeam
    player.isRetired = body.isRetired
    player.position = body.position
    player.isFACupWinner = body.isFACupWinner
    player.weightInKilos = body.weightInKilos
    player.heightInCentimeters = body.heightInCentimeters

    let connection = await client.connect()

    await connection.db('premierleague').collection('best_players').insertOne(player)
    .then((data) => {
        return res.status(201).send(data)
    } )
    .catch((e) => {
        return res.status(500).send(e)
    })
    .finally (async () => await connection.close())
}

async function findPlayers(req, res) {
    let connection = await client.connect()

    await connection.db('premierleague').collection('best_players').find().toArray()
    .then((data) => {
        return res.status(200).send(data)
    })
    .catch ((e) => {
        return res.status(500).send(e)
    })
    .finally (async() => await connection.close())
}

async function findPlayerById(req, res) {
    let id = req.params.id
    let oid = null

    try {
        oid = ObjectId.createFromHexString(id)
    } catch (e) {
        return res.status(400).send(e)
    }

    let connection = await client.connect()
    await connection.db('premierleague').collection('best_players').findOne({ _id: oid })
    .then((data) => {
        if(data === null)
            return res.status(404).send()
        
        return res.status(200).send(data)
    })  
    .catch ((e) => {
        return res.status(500).send(e)
    })
    .finally (async () => await connection.close())
}

async function updatePlayerById(req, res) {
    let id = req.params.id
    let oid = null

    try {
        oid = ObjectId.createFromHexString(id)
    } catch (e) {
        return res.status(400).send(e)
    }

    let body = req.body
    let player = Player

    player.name = body.name
    player.country = body.country
    player.age = body.age
    player.lastEnglishTeam = body.lastEnglishTeam
    player.isRetired = body.isRetired
    player.position = body.position
    player.isFACupWinner = body.isFACupWinner
    player.weightInKilos = body.weightInKilos
    player.heightInCentimeters = body.heightInCentimeters

    let query = { $set: player }

    let connection = await client.connect()

    await connection.db('premierleague').collection('best_players').updateOne({_id: oid}, query)
    .then((data) =>{
        if (data === null)
            return res.status(404).send()

        return res.status(200).send(data)
    })
    .catch((e) => {
        return res.status(500).send(e)
    })
    .finally (async ()=> await connection.close())
}

async function deletePlayerById(req, res) {
    let id = req.params.id
    let oid = null
    
    try {
        oid = ObjectId.createFromHexString(id)
    } catch (e) {
        return res.status(400).send(e)
    }

    let connection = await client.connect()

    await connection.db('premierleague').collection('best_players').deleteOne({_id: oid})
    .then((data) => {
        if (data === null)
            return res.status(404).send()

        return res.status(200).send(data)
    })
    .catch ((e) => {
        return res.status(500).send(e)
    })
    .finally (async ()=> await connection.close())
}

export default {
    insertPlayer,
    findPlayers,
    findPlayerById,
    updatePlayerById,
    deletePlayerById
}