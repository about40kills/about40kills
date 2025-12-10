import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
    console.log('EVENT RECEIVED:', event.httpMethod);
    console.log('HEADERS:', event.headers);
    console.log('BODY:', event.body);

    let responseBody = {};
    try {
        responseBody = JSON.parse(event.body || '{}');
    } catch (e) {
        responseBody = { raw: event.body };
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        },
        body: JSON.stringify(responseBody),
    };
};
