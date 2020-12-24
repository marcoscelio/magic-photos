import AWS from "aws-sdk";
import https from "https";

AWS.config.update({
  region: process.env.REACT_APP_REGION,
});

let s3 = new AWS.S3({
  apiVersion: process.env.REACT_APP_API_VERSION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  httpOptions: {
    agent: new https.Agent({ rejectUnauthorized: false }),
  },
});

export { s3 as S3 };
