import axios from 'axios'


export const getProperties = async () => {
    return await axios('http://localhost:3001/properties').then(res => res.data)
}

export const getPropertyByCategory = async () => {
    return await axios('http://localhost:3001/properties/category').then(res => res.data)
}

export const getSingleProperty = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, propertyId] = queryKey
    return await axios('http://localhost:3001/properties/single-item', {params:{id:propertyId}}).then(res => res.data)
}