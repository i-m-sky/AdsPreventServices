
class _AdProtect {
    static async init(cid, type) {

        const gclid = new URL(window.location.href).searchParams.get('gclid');
        const utm_campaign = new URL(window.location.href).searchParams.get('utm_campaign');
        const fbclid = new URL(window.location.href).searchParams.get('fbclid');

        const client = await fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => data)
            fetch('http://localhost:8000/receiveclietdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ client, cid, gclid, utm_campaign, fbclid, type }),
        });
    }
}

