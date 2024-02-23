const URL = 'http://192.168.2.30:5000/api/v1/product/getall';

export async function GetfromallData(body) {
    try {
        const response = await fetch(`${URL}/get`, {
            method: 'GET',
            headers: {
                "content-Type": "aaplication/json",

            },
            body: JSON.stringify(body),
        });
        if (response.status === 200 || response.status === 203 || response.status === 202) {
            return await response.json();
        }
        else if (response.status === 401 || response.status === 400 || response.status === 404) {

        }
        else {
            var errorRespose = await response.json();
            throw new Error(errorRespose.error);
        }
    } catch (error) { }
} 
