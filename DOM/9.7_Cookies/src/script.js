function setCookie(cookieName, cookieValue, daysToExpire, path = "/", domain = "local host") {
  // TODO
  let date = new Date(); // CREATE DATE OBJECT
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000); // BASE OFF daysToExpire
  document.cookie = `${cookieName}=${cookieValue}; expires=${date.toUTCString()} path= ${path} domain=${domain}`;
  console.log("setCookieValue: " + cookieValue);
}

function getCookieValue(cookieName) {
  // TODO
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let result;
  cArr.forEach((element) => {
    let findVal = element.search("=") + 1;
    if (element.includes(cookieName)) {
      result = element.substring(findVal);
    }
  });

  return result;
}

document.querySelector(".button").onclick = function () {
  console.log("getCookieValue: " + getCookieValue("Foo"));
  console.log("getCookieValue: " + getCookieValue("Goo"));
};

function deleteCookie() {
  // TODO
  document.cookie = "Foo=''; max-age=0; expires=0";
  document.cookie = "Goo=''; max-age=0; expires=0";
  console.log("Cookies deleted");
}
