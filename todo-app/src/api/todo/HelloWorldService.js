import axios from 'axios'

import { API_URL } from '../../Constants'
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
  
class HelloWorldService {

    /* const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin" : "",
            "Allow": "GET",
            "Content-type": "Application/json",
        }
    }; */
   
  executeHelloWorldService() {
        //console.log('executed service')
        //axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

        return axios.get(`${API_URL}/hello-world`,config);
    }
    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get(`${API_URL}/hello-world/bean`,config);
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`${API_URL}/hello-world/path-variable/${name}`,config
            // , 
            //     {
            //         headers : {
            //             authorization: basicAuthHeader
            //         }
            //     }
        );
    }
}

export default new HelloWorldService()