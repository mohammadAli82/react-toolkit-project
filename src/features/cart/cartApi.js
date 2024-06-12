import axios from 'axios'
export function fetchItems(){
    return axios.get('http://localhost:8080/cart')
}
export function addItem(item){
    return axios.post('http://localhost:8080/cart',item)
}
export function updateItem(itemUpdate,id){
    return axios.put(`http://localhost:8080/cart/${id}`,itemUpdate)
}
export function deleteItem(itemUpdate,id){
    return axios.delete(`http://localhost:8080/cart/${id}`,itemUpdate)
}