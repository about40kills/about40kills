
import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Music } from 'lucide-react';

interface NowPlayingState {
    is_playing: boolean;
    title: string;
    artist: string;
    album_art_url: string | null;
    url: string | null;
}

export function NowPlaying() {
    const [song, setSong] = useState<NowPlayingState | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isSupabaseConfigured) {
            setLoading(false);
            return;
        }

        // Initial fetch
        const fetchNowPlaying = async () => {
            try {
                const { data, error } = await supabase
                    .from('now_playing')
                    .select('*')
                    .limit(1)
                    .single();

                if (error) {
                    console.error('Error fetching now playing:', error);
                    // Fallback for demo purposes if table doesn't exist
                    // setSong({
                    //   is_playing: true,
                    //   title: "Not Like Us",
                    //   artist: "Kendrick Lamar",
                    //   album_art_url: "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad",
                    //   url: "https://open.spotify.com/track/6AI3ezQyI3XScddjPyY2yT"
                    // });
                } else {
                    setSong(data);
                }
            } catch (err) {
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();

        // Realtime subscription
        const channel = supabase
            .channel('public:now_playing')
            .on(
                'postgres_changes',
                { event: 'UPDATE', schema: 'public', table: 'now_playing' },
                (payload) => {
                    setSong(payload.new as NowPlayingState);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    if (loading) return null;
    if (!song || !song.is_playing) return null;

    return (
        <a
            href={song.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group max-w-[200px] sm:max-w-xs"
        >
            <div className="relative shrink-0">
                {song.album_art_url ? (
                    <img
                        src={song.album_art_url}
                        alt="Album Art"
                        className="w-8 h-8 rounded-full animate-spin-slow"
                        style={{ animationDuration: '10s' }}
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Music size={14} className="text-green-500" />
                    </div>
                )}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
            </div>

            <div className="flex flex-col overflow-hidden">
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    Now Playing
                    <span className="flex gap-0.5 items-end h-3 mb-0.5">
                        <span className="w-0.5 h-1.5 bg-green-500 animate-music-bar-1" />
                        <span className="w-0.5 h-2.5 bg-green-500 animate-music-bar-2" />
                        <span className="w-0.5 h-1.5 bg-green-500 animate-music-bar-3" />
                    </span>
                </span>
                <span className="text-sm font-semibold text-gray-200 truncate group-hover:text-green-400 transition-colors">
                    {song.title} <span className="text-gray-500 font-normal">- {song.artist}</span>
                </span>
            </div>
        </a>
    );
}
