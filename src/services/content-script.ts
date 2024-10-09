// import Cookies from 'js-cookie';

// (async () => {

//   const cookieID = Cookies.get('sid');
//   // Send message to content script in all tabs
//     chrome.runtime.sendMessage({sessionIDSF: cookieID, url: location.href})
//          .then(() => {
//                  console.info("Popup received response from tab with title '%s' and url %s");
                 
//          })
//          .catch((error) => {
//                  console.warn("Popup could not send message to tab %d",error);
//              })
//    })();

async function getSession(sfHost: string) {
        return new Promise<any> (resolve => {
            chrome.runtime.sendMessage(
                {
                  message:"getSession",
                  sfHost
                },
        resolve)
        }) 

        console.log('teste');
}

export async function jsforce(){

        console.log('executei');
 return new (window as any).jsforce.Connection({
        instanceURL: window.location.origin,
        accessToken: getSession(window.location.host),
        version: '59.0',
 })
}
