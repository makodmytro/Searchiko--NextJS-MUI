"use client";
import Script from "next/script";
import { useEffect } from "react";

const RelatedSearchesAfs = () => {
  /*
    <Script id="afs">
    {`(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(
arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`}
  </Script>
  */

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/adsense/search/ads.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (function (g, o) {
        (g[o] =
          g[o] ||
          function () {
            (g[o]["q"] = g[o]["q"] || []).push(arguments);
          }),
          (g[o]["t"] = 1 * new Date());
      })(window, "_googCsa");
      var pageOptions = {
        "adsafe": "low",
        "adtest": "off",
        "pubId": "pub-1203149545224208", // Enter your own client-ID here
        "relatedSearchTargeting": "content", // Must use 'content'
        "hl": "en", // The preferred language for related terms (default to 'en' if not specified)
        "styleId": "7422480129",
        "resultsPageBaseUrl": "https://searchiko.com/afs", // Enter the base URL of your results page
        "resultsPageQueryParam": "query", // Specify the query parameter on your results page
        "terms": "how to get rid of asma mucus,clear up mucus in throat" // Optionally provide your own related terms in a comma-delimited list
        //'referrerAdCreative': 'example ad title' // Only used when a user clicked an ad to arrive here
      };

      var rsblock1 = {
        "container": "afscontainer1",
        "relatedSearches": 4
      };

      _googCsa("relatedsearch", pageOptions, rsblock1);
    };
  }, []);
  return (
    <>
      <div id="afscontainer1"></div>
      {/*
        <Script
        id="afs-script"
        onLoad={() => {
          var pageOptions = {
            "adtest": "on",
            "pubId": "pub-1203149545224208", // Enter your own client-ID here
            "relatedSearchTargeting": "content", // Must use 'content'
            "hl": "en", // The preferred language for related terms (default to 'en' if not specified)
            "styleId": "7422480129", // Enter your style ID
            "resultsPageBaseUrl": "searchiko.com/afs", // Enter the base URL of your results page
            "resultsPageQueryParam": "search", // Specify the query parameter on your results page
            "terms": "how to get rid of asma mucus,clear up mucus in throat" // Optionally provide your own related terms in a comma-delimited list
            //'referrerAdCreative': 'example ad title' // Only used when a user clicked an ad to arrive here
          };

          var rsblock1 = {
            "container": "afscontainer1",
            "relatedSearches": 6
          };

          _googCsa("relatedsearch", pageOptions, rsblock1);
        }}
      />
       */}
    </>
  );

  {
    /*
      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/adsense/search/ads.js";
        script.async = true;
        document.head.appendChild(script);
    
        script.onload = () => {
          window._googCsa =
            window._googCsa ||
            function () {
              (window._googCsa["q"] = window._googCsa["q"] || []).push(arguments);
            };
          window._googCsa["t"] = 1 * new Date();
    
          var pageOptions = {
            "pubId": "pub-1203149545224208",
            "styleId": "7422480129",
            "query": decodeURI(props.params.slug),
            "hl": "en",
            //test:
            //"channel": "1443481209",
            //prod:
            "channel": channelId,
            "linkTarget": "_blank",
            //change to "on" when testing
            "adtest": "off"
          };
          var adblock1 = {
            "container": "afscontainer1",
            "number": 3
          };
          var adblock2 = {
            "container": "afscontainer2"
          };
          var adblock3 = {
            "container": "afscontainer3",
            "number": 6
          };
          window._googCsa("ads", pageOptions, adblock1, adblock2, adblock3);
        };
      }, []);
*/
  }
};
export default RelatedSearchesAfs;
