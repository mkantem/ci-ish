export default {
    async fetch(request, env, ctx) {
      // Try to find the requested asset in the _site directory
      let url = new URL(request.url);
      let path = url.pathname === "/" ? "/index.html" : url.pathname;
  
      // Try to get the asset
      try {
        let asset = await env.ASSETS.fetch(new Request("http://localhost" + path, request));
        // If asset found (status 200), return it
        if (asset.status === 200) return asset;
        // If asset not found (404), try to serve 404.html
        if (asset.status === 404) {
          let notFound = await env.ASSETS.fetch(new Request("http://localhost/404.html", request));
          return new Response(notFound.body, { status: 404, headers: notFound.headers });
        }
        return asset;
      } catch (err) {
        return new Response("Internal Error: " + err.toString(), { status: 500 });
      }
    }
  };
  