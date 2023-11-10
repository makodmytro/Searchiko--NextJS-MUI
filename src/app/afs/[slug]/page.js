"use client";
import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { useCookies } from "next-client-cookies";

export default function Afs(props) {
  return <Box sx={{ minHeight: "70vh" }}></Box>;
}

/*

export default function Slug(props) {
  const cookies = useCookies();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const channelId = urlParams.get("cn");

  const getCpc = async (countryCode) => {
    const rtkclickidstore = cookies.get("rtkclickid-store");
    const data = await fetch(
      `https://adsense.unibots.in/get_adsense/${channelId}/${countryCode}`
    );
    const result = await data.json();
    if (!result.error) {
      const objectProperties = Object.entries(result.data);
      const [device, cpc] = objectProperties[0];
      await fetch(
        `https://trk.tckingdminrdtrk.com/postback?clickid=${rtkclickidstore}&sum=${cpc}`
      );
    } else {
      await fetch(
        `https://trk.tckingdminrdtrk.com/postback?clickid=${rtkclickidstore}&sum=`
      );
    }
  };

  async function sendPostback() {
    //get country code
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var country_code = this.responseText
          .replace(/(\r\n|\n|\r)/gm, "")
          .split("loc=");
        country_code = country_code[1].split("tls=");
        country_code = country_code[0];
        getCpc(country_code);
      }
    };
  }

  function addPostbackEvent() {
    window.addEventListener("blur", () => {
      if (document.activeElement.tagName === "IFRAME") {
        sendPostback();
      }
    });
  }

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
    setTimeout(function () {
      addPostbackEvent();
    }, 1500);
  }, []);

  /*
  
  Code added by Bytes team. It triggers the postback every time the page loads instead of triggering it when an ad is clicked.
  Anyway this code won't be useful anymore when feed provider sends the postbacks

   useEffect(() => {
    const getData = async () => {
      const rtkclickidstore = cookies.get('rtkclickid-store')
      if (rtkclickidstore) {
        const data = await fetch(`https://trk.tckingdminrdtrk.com/postback?clickid=${rtkclickidstore}`)
        const result = await data.json();

        console.log("request Response => ", result)
      }
      }

      getData()
  }, [])
   */
/*
  return (
    <>
      <Box mb={0} sx={{ minHeight: "0vh" }}>
        <Container maxWidth="lg">
          <Box mt={6} component="h1" sx={{ fontWeight: "normal" }}>
            <span style={{ fontWeight: "bold" }}>
              Google Ads for {decodeURI(props.params.slug)}
            </span>
          </Box>
          <Box>
            <div id="afscontainer1"></div>
            <div id="afscontainer2"></div>
            <div id="afscontainer3"></div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
*/
