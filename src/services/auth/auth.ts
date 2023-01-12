import { baseAuthUrl, clientIdSecret64, checkResponse } from "../../utils/api";

export const getToken = async (code: string) => {
    try {
        const res = await fetch(`${baseAuthUrl}/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                'grant_type': 'authorization_code',
                'code': `${code}`,
                'client_id': '5943887238384dbab2c210bf0dddd07d',
                'client_secret': '8cef6b547d3b44778e5bbba0acf29c98'
            })
        })

        const data = await checkResponse(res)
        console.log(data)

    } catch (error) {
        console.log(`Ошибка: ${error}`);
    
    }
};
