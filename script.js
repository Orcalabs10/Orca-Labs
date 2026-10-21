(function(){
  var W='<rect class="f" x="40" y="30" width="240" height="160" rx="12"/><path d="M40 62h240"/><circle class="a" cx="58" cy="46" r="3"/><circle class="a" cx="72" cy="46" r="3"/><circle class="a" cx="86" cy="46" r="3"/>';
  var art={
    static:W+'<rect x="60" y="80" width="90" height="12" rx="4" class="a"/><path class="t" d="M60 106h150M60 120h120"/><rect x="60" y="140" width="64" height="30" rx="6"/><rect x="190" y="136" width="70" height="40" rx="6"/>',
    fullstack:'<rect class="f" x="90" y="20" width="140" height="48" rx="10"/><path d="M90 36h140"/><ellipse cx="160" cy="112" rx="55" ry="10" class="f"/><path d="M105 112v16c0 6 25 10 55 10s55-4 55-10v-16"/><ellipse cx="160" cy="176" rx="40" ry="9" class="f"/><path d="M120 176v12c0 5 18 9 40 9s40-4 40-9v-12M160 70v22M160 138v28M152 84l8 8 8-8M152 150l8 8 8-8"/>',
    deploy:'<path class="f" d="M90 150a34 34 0 0 1 4-68 46 46 0 0 1 88-6 36 36 0 0 1 8 74z"/><path d="M160 178V104M132 130l28-28 28 28"/><path class="t" d="M70 190h180M240 50l6 12 12 6-12 6-6 12-6-12-12-6 12-6z"/>',
    auth:'<path class="f" d="M160 24l80 28v52c0 44-34 72-80 88-46-16-80-44-80-88V52z"/><rect x="132" y="98" width="56" height="44" rx="8"/><path d="M142 98V84a18 18 0 0 1 36 0v14"/><circle class="a" cx="160" cy="120" r="5"/>',
    db:'<ellipse cx="160" cy="52" rx="80" ry="22" class="f"/><path d="M80 52v38c0 12 36 22 80 22s80-10 80-22V52M80 90v38c0 12 36 22 80 22s80-10 80-22V90M80 128v38c0 12 36 22 80 22s80-10 80-22v-38"/><path class="t" d="M200 92h20M200 130h20M200 168h20"/>',
    anim:W+'<circle class="a" cx="90" cy="150" r="14"/><path class="t" stroke-dasharray="3 9" d="M110 140c30-70 80-70 110-20"/><circle cx="228" cy="116" r="14" class="f"/><path d="M248 70l5 10 10 5-10 5-5 10-5-10-10-5 10-5z"/>',
    multi:'<rect class="f" x="30" y="50" width="150" height="110" rx="10"/><path d="M30 76h150"/><rect class="f" x="85" y="34" width="150" height="110" rx="10"/><path d="M85 60h150"/><rect class="f" x="140" y="70" width="150" height="110" rx="10"/><path d="M140 96h150"/><path class="t" d="M158 118h80M158 134h56"/><circle class="a" cx="158" cy="85" r="3"/>',
    maint:'<circle cx="130" cy="110" r="46" stroke-width="16" stroke-dasharray="14 13" class="t"/><circle class="f" cx="130" cy="110" r="42"/><circle cx="130" cy="110" r="16"/><path d="M200 60l40 40M232 52a22 22 0 0 0-30 30L190 94l16 16 12-12a22 22 0 0 0 30-30l-14 14-12-4-4-12z"/>',
    resp:'<rect class="f" x="30" y="40" width="170" height="110" rx="10"/><path d="M30 126h170M115 150v22M90 172h50"/><rect class="f" x="170" y="80" width="64" height="100" rx="10"/><rect class="f" x="228" y="110" width="40" height="70" rx="8"/><path class="t" d="M46 62h70M46 78h50"/>',
    port:W+'<circle class="a" cx="86" cy="90" r="10"/><path class="t" d="M108 84h90M108 98h60"/><rect x="60" y="120" width="52" height="50" rx="6"/><rect x="134" y="120" width="52" height="50" rx="6"/><rect x="208" y="120" width="52" height="50" rx="6"/>'
  };
  var items=[
    ['Static Website','static','Clean, fast-loading websites built with pure HTML, CSS and JavaScript. Ideal for businesses that need a polished online presence.'],
    ['Full Stack Website','fullstack','Complete web applications, from the interface to the server logic and the database, all built and connected by one team.'],
    ['Deployment','deploy','We take your site live on reliable hosting, with domain setup, SSL and a smooth release process.'],
    ['Authentication & Security','auth','Secure sign-up and login, role-based access and sensible protections that keep your users and data safe.'],
    ['Database','db','Well-structured, scalable databases designed around how your product actually uses its data.'],
    ['Animated Website','anim','Smooth, purposeful motion and interactions that bring your brand to life without slowing the page down.'],
    ['Multipage Website','multi','Organised multi-page sites with clear navigation and a consistent design across every page.'],
    ['Website Maintenance','maint','Ongoing updates, bug fixes, backups and performance checks so your website stays healthy.'],
    ['Responsive Website','resp','Layouts that adapt cleanly to phones, tablets and desktops, so every visitor gets a great experience.'],
    ['Portfolio Website','port','A sharp personal or studio portfolio that shows your work and helps you win new clients.']
  ];
  document.getElementById('svc').innerHTML=items.map(function(s,i){
    return '<div class="svc-row"><div><p class="num">'+String(i+1).padStart(2,'0')+'</p><h3>'+s[0].replace('&','&amp;')+'</h3><p>'+s[2]+'</p><div class="price">Price: <span>₹ ______</span></div></div><div class="art"><svg viewBox="0 0 320 210" role="img" aria-label="'+s[0].replace('&','and')+' illustration">'+art[s[1]]+'</svg></div></div>';
  }).join('');

})();
