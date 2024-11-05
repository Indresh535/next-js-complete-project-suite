// pages/api/proxy.js
export default async function handler(req:any, res:any) {
    const url = 'https://css.cruisebase.com/PriceDrop/'; // target URL
    const response = await fetch(url);
    const data = await response.text();

    res.status(200).send(data); // Send the response back to the client
}
