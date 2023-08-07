import axios from 'axios' ;

const url = 'htpps://covid19.mathdro.id/api' ;

const fetchData = async () => {
    try{
        const response = await axios.get(url);
        console.log(response)

        return response

    } catch(error){

    }
}