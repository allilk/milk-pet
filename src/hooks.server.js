import { start_mongo } from "./db/mongo";

start_mongo()
    .then(() => {
        console.log("Started Mongo Connection..");
    })
    .catch((e) => {
        console.error(e);
    });
