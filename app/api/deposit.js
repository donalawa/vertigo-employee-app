import apiClient from "./client";

const makeDeposit = (code, amount) => apiClient.post('/deposit', {code, amount});



export {
    makeDeposit
}