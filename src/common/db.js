import { MongoClient, ServerApiVersion } from "mongodb"

const uri = 'mongodb://radiodeportes_development:fAtn2X5kQBeNX31d@ac-vsqcebz-shard-00-00.9pmkdhj.mongodb.net:27017,ac-vsqcebz-shard-00-01.9pmkdhj.mongodb.net:27017,ac-vsqcebz-shard-00-02.9pmkdhj.mongodb.net:27017/?ssl=true&replicaSet=atlas-llrcwu-shard-0&authSource=admin&appName=Cluster-development'

const client = new MongoClient (uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: true,
        strict: true
    }
})

export default client