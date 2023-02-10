import axios from 'axios'

export default function request(options) {
    return axios({
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        ...options
    }).then((res) => {
        return res.data
    })
}
