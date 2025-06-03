function redirectBasedOnOS() {
  const userAgent = window.navigator.userAgent;
  console.log("userAgent is ", userAgent);
  if (userAgent.indexOf("Mac") !== -1) {
    window.location.href = "https://sea-lion-app-2-32wmj.ondigitalocean.app/";
  }
}

window.onload = redirectBasedOnOS();
