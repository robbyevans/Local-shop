import axios from 'axios'

//fetch items
export const fetchItems = async () => {
    const response = await axios.get('http://localhost:3000/items')
    return response.data;
};

const ItemsAPIService = { fetchItems };
export default ItemsAPIService;