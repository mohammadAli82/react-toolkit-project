import axios from 'axios'
export function fetchProducts(amount=1){
    return axios.get('http://localhost:3500/products')
}