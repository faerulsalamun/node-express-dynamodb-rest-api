var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region,
    endpoint: process.env.endpoint,
});

const db = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true});

module.exports = db;
