import axios from 'axios' ;

const url = 	'https://data.binance.com/api/v3/ticker/24hr';

export const fetchData = async () => {
    try{
        const response = await axios.get(url);
        console.log(response)

        return response

    } catch(error){

    }
}

