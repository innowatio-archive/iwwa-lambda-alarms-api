import Collection from "iwwa-kinesis-collection";
import {load} from "dotenv";

load();

var Alarms = new Collection("alarms", process.env.KINESIS_STREAM_NAME);

export function handler (event, context) {
    Alarms.processEvent(event)
        .then(context.succeed)
        .catch(context.fail);
}
