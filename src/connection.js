const { Client } = require("contensis-delivery-api");
const ContensisClient = Client.create({
  rootUrl: "https://cms-zenhub.cloud.contensis.com",
  accessToken: "sNF3SnNWu6RMAtpzybcOqkHKUlMnEUwrNre0OlD9G8UERroN",
  projectId: "leif",
});

export default ContensisClient