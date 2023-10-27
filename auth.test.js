// curl --location 'https://omniwallet.tngbl.xyz/authenticate' \
// --header 'Content-Type: text/plain' \
// --data '{
//     "username": "kushagra",
//     "password": "NINJACHIP123456"
// }'


const baseUrl = 'https://omniwallet.tngbl.xyz/authenticate'

const axios = require('axios'); 

let config = {};
describe("POST Canton Authentication Endpoints", () => {

       //---------------------------------------------------------------------------------------------------------------------

    it("Valid Username and valid password", async () => {
        config = {
            username: "prakash1234",
            password: "Kavita@123"
        }
        const response = await axios.post(baseUrl,config);
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.data.Token);

        expect(response.status).toBe(200);

        //----------------------------------------------------------------------------------------------------------------
        
    })
    it("Invalid Username and valid password", async () => {
        config = {
            username: "Prakash1234",
            password: "Kavita@123"
        }
        const response = await axios.post(baseUrl,config).then(res => res.data);
        console.log(response.message);
        expect(response.status).toBe(401);
        
    })


    //---------------------------------------------------------------------------------------------------------------------

    it("Valid Username and Invalid password", async () => {
        config = {
            username: "prakash1234",
            password: "Kavita123"
        }
        const response = await axios.post(baseUrl,config).then(res => res.data);
        console.log(response.message);
        expect(response.status).toBe(401);
        
    })


      //---------------------------------------------------------------------------------------------------------------------


    it("Null Username and Valid password", async () => {
        config = {
            username: "",
            password: "Kavita@123"
        }
        const response = await axios.post(baseUrl,config).then(res => res.data);
        console.log(response.message);
        expect(response.status).toBe(401);
        
    })


         //---------------------------------------------------------------------------------------------------------------
 

    it("Valid Username and Null password", async () => {
        config = {
            username: "prakash1234",
            password: ""
        }
        const response = await axios.post(baseUrl,config).then(res => res.data);
        console.log(response.message);
        expect(response.status).toBe(401);
        
    })


         //-------------------------------------------------------------------------------------------------------------------------------------


    
    it("Valid Username and Null password", async () => {
        config = {
            username: "",
            password: ""
        }
        const response = await axios.post(baseUrl,config).then(res => res.data);
        console.log(response.message);
        expect(response.status).toBe(401);
        
    })
    

    


});