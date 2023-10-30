const { Client } = require('contensis-delivery-api');
const { REACT_APP_ALIAS, REACT_APP_ACCESS_TOKEN, REACT_APP_PROJECT_API_ID } =
  process.env;

const ContensisClient = Client.create({
  rootUrl: `https://cms-${REACT_APP_ALIAS}.cloud.contensis.com`,
  accessToken: REACT_APP_ACCESS_TOKEN,
  projectId: REACT_APP_PROJECT_API_ID,
});

export default ContensisClient;
