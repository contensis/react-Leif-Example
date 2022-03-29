const { Client } = require("contensis-delivery-api");
const ContensisClient = Client.create({
  rootUrl: "https://cms-leif.cloud.contensis.com",
  accessToken: "87YVJEVmuYj4B9QNswjZAuPlel4r51AfyGq5FMzcC6NHVeSn",
  projectId: "website",
});

export default ContensisClient