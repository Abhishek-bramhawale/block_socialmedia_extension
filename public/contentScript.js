const BLOCKED_SITES = [
  "youtube.com",
  "facebook.com"
  
];

if (BLOCKED_SITES.some(site => window.location.hostname.includes(site))) {
   
      document.documentElement.innerHTML = `
        <body style="background:black;color:white;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
          <div style="text-align:center;">

            <h1>Social media detected - </h1>
            <h2>Blocked</h1>
            <h3>Go Study Right Now!</h2>

          </div>
        </body>
      `;
 
  }