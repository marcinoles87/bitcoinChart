import axios from 'axios' ;

const url = 	'https://api.publicapis.org/entries';

export const fetchData = async () => {
    try{
        const response = await axios.get(url);
        console.log(response)

        return response

    } catch(error){

    }
}

