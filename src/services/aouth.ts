import jsforce from 'jsforce'

export class AOuth {
  authentication(){
   const connection = new jsforce.Connection({
    instanceUrl : '<your Salesforce server URL (e.g. https://na1.salesforce.com) is here>',
    serverUrl : '<your Salesforce server URL (e.g. https://na1.salesforce.com) is here>',
    sessionId : '<your Salesforce session ID is here>'
   });

   return connection;
  }

  get sessionId() {
 
    const cookie = document.cookie.split('sid=')[1].split(';');
    const sessionId = cookie ? cookie[0] : null;

    return sessionId;
  }
}