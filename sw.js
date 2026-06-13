const CACHE='arcade-v37';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){if(k!==CACHE)return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});

/* Stale-while-revalidate: answer from cache instantly (fast + offline), then
   refresh the cached copy from the network in the background so the next load
   gets the latest. Falls back to the cached shell when fully offline. */
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(function(cached){
    var network=fetch(e.request).then(function(resp){
      if(resp&&resp.status===200&&resp.type==='basic'){
        var cp=resp.clone();caches.open(CACHE).then(function(c){c.put(e.request,cp);});
      }
      return resp;
    }).catch(function(){return cached||caches.match('./index.html');});
    return cached||network;
  }));
});
