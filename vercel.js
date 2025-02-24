{
    "version": 2,
    "builds": [
        {
            "src": "src/index.js",
            "use": "@vercel/static-build"
        }
    ],
    "routes": [
        {
            "src": "/assets/(.*)",
            "dest": "src/assets/$1",
            "headers": {
                "Cache-Control": "public, max-age=31536000, immutable",
                "Content-Type": {
                    ".mp3": "audio/mpeg"
                }
            }
        }
    ],
    "mimeTypes": {
        ".mp3": "audio/mpeg"
    }
}
