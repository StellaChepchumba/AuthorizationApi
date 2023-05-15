// const axios = require("axios");

// const pass_secret1 = "SnoopDogg"
// const pass_secret2 = "DrDre"

// const osID = "GDLDefined:123456789"

// const credentials = {
//       "consumerKey": CryptoJS.AES.encrypt(
//         osID,
//         pass_secret1
//       ).toString(),
//       "consumerSecret": CryptoJS.AES.encrypt(
//         osID,
//         pass_secret2
//       ).toString()
// }

// console.log(credentials)

// const axiosInstance = axios.create({
//     headers: {
//       'Access-Control-Allow-Origin': '*' // replace with the actual origin of your Azure Function
//     },
//   });

// const fetchAuthToken = () => {
//     axiosInstance
//     .post(`http://localhost:4000/api/authorization/generateToken`, credentials)
//     .then((response) => {
//         // send a response back to the client
//         res.status(200).json(response.data);
//     })
//     .catch((err) => {
//         // send an error response back to the client
//         res.status(500).json("Internal server error");
//     });
// }

// module.exports = fetchAuthToken;