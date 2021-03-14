import axios from 'axios';

function fetch(fetchOptions) {
    const {
        body = {},
        method = 'GET',
        endPoint = '',
    } = fetchOptions;
    return     axios({
        method: method,
        url: endPoint ,
     })
}
export default fetch;