const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"
const ObjectId = mongodb.ObjectID

const id = new ObjectId
console.log(id)

MongoClient.connect( connectionURL,{useNewUrlParser: true}, (error,client) => {
    if (error) {
        console.log('There was an error',error)
    } else {
    const db = client.db(databaseName)

// This section is to do updateOne and  update many. Let's go!!
        // db.collection('users').updateOne(
        //     {
        //         _id:  new ObjectId("6010189a2198893cfd559973")
        //     },
        //     {
        //         $set: {
        //             sex: 'Male'
        //         }
        //     }
        //  ).then((result) => {
        //      console.log(result.matchedCount, result.modifiedCount)
        //  }).catch((error) => {
        //      console.log("there was an error",error)
        //  })

// This section is to do updateOne and  update many. Let's go!!
// db.collection('users').updateMany(
//     {

//     },
//     {
//         $inc: {
//             age: 1
//         }
//     }
//  ).then((result) => {
//      console.log(result.matchedCount, result.modifiedCount)
//  }).catch((error) => {
//      console.log("there was an error",error)
//  })

db.collection('users').deleteMany(
    {
        age:28
    },
    {
       
    }
 ).then((result) => {
     console.log(result.matchedCount, result.modifiedCount)
 }).catch((error) => {
     console.log("there was an error",error)
 })

    // db.collection('tasks').find({finished:false}).toArray(( error,results) => {
    //     if (error) {
    //         console.log("There is an error")
    //     } else
    //     {
    //         console.log(results)
    //     }
    // })


    // db.collection('users').findOne({name: 'Rajes alluri'},(error,result) =>{
    //     if (error){
    //         console.log('Error',error)
    //     }
    //     else {
    //         console.log(result)
    //     }
    // })
    // }  


    }
    client.close()
})



    // db.collection('users').insertOne({
    //     name: "Rajesh Valluri",
    //     age: 26,
    //     sex: "Male"
    // },(error,result) => {
    //     if (error) {
    //         console.log("Unable to insert document," , error)
    //     } else {
    //         console.log('Insert successful,',result.ops)
    //     }
    // })
    // }
//     db.collection('tasks').insertMany([
//         {
//             description: 'Attend course',
//             finished: false
//         },
//         {
//           description: 'Submit project',
//           finished: false
//         },
//         {
//           description: 'Attend Graduation',
//           finished: false
//         }
//     ],(error,result) => {
//      if (error) {
//          console.log("There was an error", error)
//      } else {
//          console.log("Successfully loaded the following,", result.ops)
//     }
//     })
// } })