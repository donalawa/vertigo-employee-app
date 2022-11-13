import client from './client';

const getMenuFoods = (day) => client.get(`/menu/${day}`);


export {
    getMenuFoods
}

