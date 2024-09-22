// Listen for messages from popup.
import Cookies from 'js-cookie';

(async () => {

  const cookieID = Cookies.get('sid');
  // Send message to content script in all tabs
    chrome.runtime.sendMessage({sessionIDSF: cookieID, url: location.href})
         .then(() => {
                 console.info("Popup received response from tab with title '%s' and url %s");
                 
         })
         .catch((error) => {
                 console.warn("Popup could not send message to tab %d",error);
             })
   })();