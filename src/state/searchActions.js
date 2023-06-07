// searchActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export const fetchData = createAsyncThunk('search/fetchData', async ({ filterType, filterValue }) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/capsules?${filterType}=${filterValue}`, requestOptions);
        // const response = await fetch(`https://api.spacexdata.com/v3/capsules`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
