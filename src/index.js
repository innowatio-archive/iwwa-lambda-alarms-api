import Collection from "lkd-collection";
import dotenv from "dotenv";

dotenv.load();

var Alarms = new Collection({
    name: "alarms",
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export var handler = Alarms.producer;
