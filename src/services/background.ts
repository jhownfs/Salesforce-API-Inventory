// src\services\background.ts

let cookieSessionId: string;

chrome.runtime.onMessage.addListener((request,sender, sendResponse) => {
  if (request.sessionIDSF !== undefined) {
   cookieSessionId = request.sessionIDSF;
   sendResponse({ sessionIDSF: request.sessionIDSF });
  }

  if(request.message === "ready") {
    sendResponse({ sessionIDSF: cookieSessionId });
  }
});

