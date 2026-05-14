import { ObjectId } from "mongodb"

const Player = {
    _id: ObjectId,
    name: String,
    country: String,
    age: Number,
    lastEnglishTeam: String,
    isRetired: Boolean,
    position: String,
    isFACupWinner: Boolean,
    weightInKilos: Number,
    heightInCentimeters: Number
}

export default Player