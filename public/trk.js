function getNewOfferUrlTonic(offerUrl) {
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source == "Google") {
    var newOfferUrl = offerUrl.replace("{sub4}", urlParams.get("sub4"));
    newOfferUrl = newOfferUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = newOfferUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{sub5}", urlParams.get("sub5"));
    newOfferUrl = newOfferUrl.replace("{sub6}", urlParams.get("sub6"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
  if (source == "facebook") {
    var newOfferUrl = offerUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = newOfferUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{sub1}", urlParams.get("sub1"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
}

function getNewOfferUrlSystem1(offerUrl) {
  //check if it is a Facebook or Google campaign
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source == "Google") {
    var newOfferUrl = offerUrl.replace("{sub6}", urlParams.get("sub6"));
    newOfferUrl = newOfferUrl.replace("{sub4}", urlParams.get("sub4"));
    newOfferUrl = newOfferUrl.replace("{sub5}", urlParams.get("sub5"));
    newOfferUrl = newOfferUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = newOfferUrl.replace(
      "{utm_campaign}",
      urlParams.get("utm_campaign")
    );
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
  if (source == "facebook") {
    var newOfferUrl = offerUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = newOfferUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{sub1}", urlParams.get("sub1"));
    newOfferUrl = newOfferUrl.replace("{sub7}", urlParams.get("sub7"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
}

function getNewOfferUrlSedoSearch(offerUrl) {
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source == "Google") {
    var newOfferUrl = offerUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = newOfferUrl.replace("{sub4}", urlParams.get("sub4"));
    newOfferUrl = newOfferUrl.replace("{sub5}", urlParams.get("sub5"));
    newOfferUrl = newOfferUrl.replace("{sub6}", urlParams.get("sub6"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
  if (source == "facebook") {
    var newOfferUrl = offerUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = offerUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = offerUrl.replace("{sub1}", urlParams.get("sub1"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
}

function getNewOfferUrlDomainActive(offerUrl) {
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source == "facebook") {
    var newOfferUrl = offerUrl.replace("{sub4}", urlParams.get("sub4"));
    newOfferUrl = offerUrl.replace("{sub5}", urlParams.get("sub5"));
    newOfferUrl = offerUrl.replace("{sub6}", urlParams.get("sub6"));
    newOfferUrl = offerUrl.replace("{sub1}", urlParams.get("sub1"));
    newOfferUrl = offerUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = offerUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
}

function getNewOfferUrlBodis(offerUrl) {
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source == "facebook") {
    var newOfferUrl = offerUrl.replace("{sub1}", urlParams.get("sub1"));
    newOfferUrl = offerUrl.replace("{sub3}", urlParams.get("sub3"));
    newOfferUrl = offerUrl.replace("{sub2}", urlParams.get("sub2"));
    newOfferUrl = newOfferUrl.replace("{clickid}", getCookieValue());
    return newOfferUrl;
  }
}

function getCookieValue() {
  var name = "rtkclickid-store=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

function trk() {
  var urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get("utm_source");
  if (source) {
    const anchorLinks = document.querySelectorAll("a");
    anchorLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href && href.includes("network=website")) {
        link.setAttribute("href", getNewOfferUrlTonic(href));
      }
      if (href && href.includes("click_track_url")) {
        link.setAttribute("href", getNewOfferUrlSystem1(href));
      }
      if (href && href.includes("ics_")) {
        link.setAttribute("href", getNewOfferUrlSedoSearch(href));
      }
      if (href && href.includes("ijrpi.info")) {
        link.setAttribute("href", getNewOfferUrlDomainActive(href));
      }
      if (href && href.includes("ref_keyword")) {
        link.setAttribute("href", getNewOfferUrlBodis(href));
      }
    });
  }
}

function afsTracking() {
  const anchorLinks = document.querySelectorAll("a");
  anchorLinks.forEach(function (link) {
    const href = link.getAttribute("href");
    if (href && href.includes("/afs")) {
      link.setAttribute(
        "href",
        href + `?network=rm&clickid=${getCookieValue()}`
      );
    }
  });
}

setTimeout(function () {
  trk();
  //afsTracking();
}, 1500);
