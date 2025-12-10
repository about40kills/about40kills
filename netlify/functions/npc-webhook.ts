import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
    // 1. LOG EVERYTHING
    console.log('--- WEBHOOK HIT ---');
    console.log('Method:', event.httpMethod);
    console.log('Headers:', JSON.stringify(event.headers, null, 2));
    console.log('Body:', event.body);

    // 2. PREPARE COMMON RESPONSE HEADERS (CORS)
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Content-Type': 'application/json',
    };

    // 3. HANDLE OPTIONS (Preflight)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'CORS OK' }),
        };
    }

    // 4. HANDLE GET (Browser Verification)
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                status: 'active',
                message: 'Webhook endpoint is reachable.',
                timestamp: new Date().toISOString(),
            }),
        };
    }

    // 5. HANDLE POST (The Real Deal)
    let parsedBody = {};
    try {
        parsedBody = JSON.parse(event.body || '{}');
    } catch (e) {
        console.warn('Failed to parse JSON body:', e);
        parsedBody = { raw: event.body };
    }

    // 6. RETURN A "SUPER SUCCESS" RESPONSE
    // We return every common success field to satisfy any validator
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            success: true,
            status: 'ok',
            message: 'Webhook received successfully',
            received_data: parsedBody, // Echo back data (Challenge)
            timestamp: new Date().toISOString(),
        }),
    };
};
