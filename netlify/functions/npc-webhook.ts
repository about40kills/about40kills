import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Missing Supabase environment variables');
        return { statusCode: 500, body: 'Server Configuration Error' };
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    try {
        const payload = JSON.parse(event.body || '{}');
        console.log('Received payload:', payload);

        // Map the payload from npc.aikins.xyz to our table structure
        // Adjust these fields based on the actual payload structure you receive
        const updateData = {
            is_playing: payload.isPlaying ?? true,
            title: payload.song || payload.title,
            artist: payload.artist,
            album_art_url: payload.albumArt || payload.image,
            url: payload.url || payload.link,
            updated_at: new Date().toISOString(),
        };

        // Update the row with id=1
        const { error } = await supabase
            .from('now_playing')
            .update(updateData)
            .eq('id', 1);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (err: any) {
        console.error('Error processing webhook:', err);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
