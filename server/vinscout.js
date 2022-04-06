class _AdProtect {
    static async init(gcid) {
        const url = new URL(window.location.href);
        const gclid = new URL(window.location.href).searchParams.get('gclid');
        const utm_campaign = new URL(window.location.href).searchParams.get('utm_campaign');
        

        const client = await fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => data)
            fetch('http://localhost:8000/receiveclietdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ client, gcid,gclid,utm_campaign }),
        });
    }
}

