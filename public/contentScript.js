const BLOCKED_SITES =[
  "youtube.com",
  "medium.com",
  "quora.com",
  "reddit.com",
  "mxplayer.in",
  "zee5.com",
  "jiocinema.com",
  "voot.com",
  "sonyliv.com",
  "netflix.com",
  "primevideo.com",
  "amazon.com",
  "hotstar.com",
  "discord.com",
  "telegram.org",
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "tiktok.com",
  "snapchat.com"
];

if (BLOCKED_SITES.some(site => window.location.hostname.includes(site))) {
  setInterval(()=>{
    document.documentElement.innerHTML= `
      <body style="background:black;color:white;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
        <div style="text-align:center;">
          <h1>Blocked</h1>
          <h2>Go Study Right Now!</h2>
        </div>
      </body>
    `;
  },100);
}