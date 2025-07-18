const BLOCKED_SITES = [
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
  
  function getDetectedSite() {
    return BLOCKED_SITES.find(site => window.location.hostname.includes(site)) || window.location.hostname;
  }
  
  function isBlockedSite(){
    return BLOCKED_SITES.some(site => window.location.hostname.includes(site));
  }
  
  function blockDistractingSite(){
    if(!isBlockedSite())return;
  
    const imgUrl = chrome.runtime.getURL("img.gif");
    const detectedSite = getDetectedSite();
  
    document.documentElement.innerHTML = `
      <body style="margin:0;background:black;color:white;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
        <div style="text-align:center;">
          
          <h1>🚫 social media detected : <span style='color:#ff5252'>${detectedSite}</span></h1>
          <h2> Blocked</h1>
          <h3>Go Study Right Now!</h2>
                    <img src="${imgUrl}" style="margin-top:20px;max-width:300px;"/>

        </div>
      </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded",()=> {
    blockDistractingSite();
  
    const observer = new MutationObserver(blockDistractingSite);
    if(document.body){
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
  