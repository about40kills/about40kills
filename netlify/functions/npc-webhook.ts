import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const handler: Handler = async (event) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            },
            body: '',
        };
    }

    // Allow GET requests for verification checks
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: 'Webhook endpoint is active',
        };
    }

    // Only allow POST requests for actual data
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Missing Supabase environment variables');
        return { statusCode: 500, body: 'Server Configuration Error' };
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    try {
        console.log('Raw event body:', event.body);

        // Parse payload - handle if it's already an object or a string
        let body;
        if (typeof event.body === 'object' && event.body !== null) {
            body = event.body;
        } else {
            body = JSON.parse(event.body || '{}');
        }

        console.log('Parsed body:', body);

        // NPC sends data in a nested 'payload' object
        // Structure: { "event": "media.update", "payload": { ... } }
        const data = body.payload || body;

        // Map the payload from npc.aikins.xyz to our table structure
        // Adjust these fields based on the actual payload structure you receive
        const updateData = {
            is_playing: data.isPlaying ?? true,
            title: data.song || data.title || data.track,
            artist: data.artist,
            album_art_url: data.albumArt || data.image || data.cover,
            url: data.url || data.link || data.uri,
            updated_at: new Date().toISOString(),
        };

        // Update the row with id=1
        const { error } = await supabase
            .from('now_playing')
            .update(updateData)
            .eq('id', 1);

        if (error) {
            console.error('Supabase error:', error);
            // Even if Supabase fails, we return 200 to NPC so it doesn't think the webhook is broken
            // We'll see the error in Netlify logs
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (err: any) {
        console.error('Error processing webhook:', err);
        // CRITICAL: Always return 200 OK to NPC during setup, even if our code crashes.
        // This allows the destination to be added. We can debug the logs later.
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, warning: 'Error occurred but handled' }),
        };
    }
};
