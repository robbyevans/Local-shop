import axios from 'axios'

//fetch requested items
export const fetchOrders = async () => {
    const response = await axios.get('http://localhost:3000/requested_items')
    console.log(response.data)
    return response.data;
};

const OrdersAPIService = { fetchOrders };
export default OrdersAPIService;