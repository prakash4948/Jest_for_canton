const baseUrl = 'https://omniwallet.tngbl.xyz/authenticate';
const axios = require('axios');

describe("POST Canton Forgot password  Endpoints", () => {
    it("", async () => {
        const config = {
            username: "prakash1234",
            password: "Kavita@123"
        };
        const { data, status } = await axios.post(baseUrl, config);
        expect(status).toBe(200);
    });

    it("should return 401 for invalid username and valid password", async () => {
        const config = {
            username: "Prakash1234",
            password: "Kavita@123"
        };
        const { status } = await axios.post(baseUrl, config).catch((error) => error.response);
        expect(status).toBe(401);
    });

    it("should return 401 for valid username and invalid password", async () => {
        const config = {
            username: "prakash1234",
            password: "Kavita123"
        };
        const { status } = await axios.post(baseUrl, config).catch((error) => error.response);
        expect(status).toBe(401);
    });

    it("should return 401 for null username and valid password", async () => {
        const config = {
            username: "",
            password: "Kavita@123"
        };
        const { status } = await axios.post(baseUrl, config).catch((error) => error.response);
        expect(status).toBe(401);
    });

    it("should return 401 for valid username and null password", async () => {
        const config = {
            username: "prakash1234",
            password: ""
        };
        const { status } = await axios.post(baseUrl, config).catch((error) => error.response);
        expect(status).toBe(401);
    });
});

