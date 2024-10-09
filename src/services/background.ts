// src\services\background.ts

chrome.runtime.onMessage.addListener((request,sender, sendResponse) => {
  if (request.sessionIDSF !== undefined) {
   sendResponse({ sessionIDSF: request.sessionIDSF });
  }
 console.log('request', request);
  if(request.message === "getSession") {
    chrome.cookies.get({ url: request.sfHost, name: 'sid' }, sessionCookie => {
      sendResponse(sessionCookie.value)
    })
  }
});

