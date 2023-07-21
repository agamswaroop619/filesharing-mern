import axios from 'axios';

export const uploadFile = (data) => {
    try {
        axios.post(API_URL, data);
        
    } catch (error) {
        console.error("Error while calling API", error.message);
    }
}