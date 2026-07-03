const CACHE='arcade-v41';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){if(k!==CACHE)return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});

self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  var req=e.request;
  var isDoc=req.mode==='navigate'||req.destination==='document'||(req.headers.get('accept')||'').indexOf('text/html')!==-1;

  /* Network-first for the HTML document: when online, always serve the latest
     deploy so updates show up on the next load. Falls back to the cached shell
     when offline. */
  if(isDoc){
    e.respondWith(fetch(req).then(function(resp){
      if(resp&&resp.status===200&&resp.type==='basic'){
        var cp=resp.clone();caches.open(CACHE).then(function(c){c.put('./index.html',cp);});
      }
      return resp;
    }).catch(function(){
      return caches.match(req).then(function(c){return c||caches.match('./index.html');});
    }));
    return;
  }

  /* Stale-while-revalidate for static assets: answer from cache instantly
     (fast + offline), then refresh the cached copy from the network in the
     background so the next load gets the latest. */
  e.respondWith(caches.match(req).then(function(cached){
    var network=fetch(req).then(function(resp){
      if(resp&&resp.status===200&&resp.type==='basic'){
        var cp=resp.clone();caches.open(CACHE).then(function(c){c.put(req,cp);});
      }
      return resp;
    }).catch(function(){return cached||caches.match('./index.html');});
    return cached||network;
  }));
});
