import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

serve(() => {
    try {
        return new Response(JSON.stringify({
            epochTime: Date.now(),
        }), {
            headers: {
                'content-type': 'application/json'
            }
        });
    } catch (err) {
        return new Response(err);
    }
}, { port: 8000 });
