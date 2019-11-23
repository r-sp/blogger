## Youtube images
These parameters are intended for type data `IMAGE`. When one of these parameters is added to the name of a datum of this type, it will return a new value.

The setting  `isYouTube` checks whether the image contains a thumbnail from the YouTube video service, while `youtubeMaxResDefaultUrl` providing the URL for the `maxresdefault.jpg` YouTube video image .

From a technical point of view, these parameters are data contained in an object and that return a new value:

    ...
        "data": {
          "dataImage": image,
          { 
           "isYouTube": boolean,
           "youtubeMaxResDefaultUrl": image
          }
        }

In practice, these parameters are simply added to the name of the data.

URL of the image:

    data:view.featuredImage

This image comes from YouTube?

    data:view.featuredImage.isYouTube

YouTube HD image URL:

    data:view.featuredImage.youtubeMaxResDefaultUrl

example:

    <b:tag name='img'
           cond='data:view.featuredImage.isYouTube'
           expr:src='resizeImage(data:view.featuredImage.youtubeMaxResDefaultUrl,500,"16:9")'/>
