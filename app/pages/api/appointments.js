export default async (req, res) => {
    const name = req.query.name.split('_')
    console.log(req.query.date)
    const firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    const lastName = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    const { MongoClient, ServerApiVersion } = require('mongodb')
    const uri = "mongodb+srv://ianfboldea:asdfjkl;11@hypertension-cluster.vkdattq.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    let searchedForUser = null
    await client.connect(async err => {
        const collection = client.db("auth").collection("users")
        searchedForUser = await collection.findOne({ name: `${firstName} ${lastName}` })
        if (searchedForUser) {
            console.log(`Found a user in the collection with the name '${firstName} ${lastName}'`)
        } else {
            console.log('Error')
        }
        client.close()
    })
    await client.connect(async err => {
        const appointments = await client.db("auth").collection("appointments")
        const appointmentsList = await appointments.find({
            user_id: searchedForUser.id
        })
        res.status(200).json({ appointments: appointmentsList })
    })
 }