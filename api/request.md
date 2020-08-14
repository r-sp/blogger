## Request.js

This is another way of generating fake traffic by requesting a document via `<iframe>` and being directed to the origin or location of the document.

It's easy, just install the [request.js](https://github.com/rizkysaskiaputra/blogger/blob/master/api/request.js) script and place it in the head.

Remember it takes a second site as analyzing the document pages earlier. like site A and site B, site A is your own site then attach the request.js script to site B in the `<iframe>` element.

can be with ordinary elements, better manipulated again by creating iframe elements in javascript.

    // iframe
    var iframe=document.createElement('iframe');
    var origin=window.location.protocol+'//'+window.location.host+window.location.pathname;
    var url='https://27052001.blogspot.com?url='+origin; // yoursite here
    iframe.setAttribute('frameborder','0');
    iframe.setAttribute('height','100');
    iframe.setAttribute('id','sandbox');
    iframe.setAttribute('sandbox','allow-scripts allow-same-origin');
    iframe.setAttribute('src',encodeURI(url));
    iframe.setAttribute('width','100');
    iframe.style.display='none';
    var rel=document.body.querySelector('#sandbox');
    if(rel){
    document.body.removeChild(rel);
    }
    document.body.appendChild(iframe);

or try a [demo](https://27052001.blogspot.com?url=https://rizkysaskiaputra.blogspot.com)
