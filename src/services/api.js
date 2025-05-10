import axios from 'axios';

const BASE_URL="http://20.244.56.144/evaluation-service";
export const getstockPrices=asyn(stockSymbol,minutes) 
{
    try{
        const response=await axios.get(`{BASE_URL}/stockesSymbol}/prices`,{
            params:{minutes}
        });
        return response.data;
    }
    catch (error){
        console.log("error fetching",error);
        return[];
    }
};
export const getstocklist=async() => {
    try{
        const response=await axios.get(`${BASE_URL}/stocks`);
        return response.data;
    }catch(error){
        console.error("error fetching list",error);
        return[];
    }
};
  
