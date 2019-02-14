import axios from "axios"; //sends request to api and helps you to get response

class APIClass {
    constructor() {
        this.instance = axios.create({ //create instance that conects to this baseurl
            baseURL: process.env.REACT_APP_APIURL,
            timeout: 1000
        });
    }

    getDefaultHeaders() {
        return {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            // we send this to headers token and  response as json 
            //(localStorage-is browser storage)
            responseType: "application/json"
        };
    }

    get(url) { //take url as argument. call get on this class instance 
        return this.instance.get(url, {
            headers: this.getDefaultHeaders() //add to get part configuration part. Defaultheaders(up)
        });
    }

    post(url, data) {
        return this.instance.post(url, data, {
            headers: this.getDefaultHeaders()
        });
    }


    // post(url,data) {
    //     this.call('post',url,data)
    // }
    //if we have call, it combines all methods together and use only one function and if we need to change something
    //we just change it in call function

    call(method, url, data) {
        return this.instance[method](url, data, {
            method,
            headers: this.getDefaultHeaders()
        });
    }
}

const API = new APIClass();

export default API;

