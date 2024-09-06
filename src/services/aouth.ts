export class Aouth  {

  getCookie(cookieName: string): Promise<any | undefined> {
    return new Promise((resolve, reject) => {
      chrome.cookies.get({url: 'https://*.salesforce.com', name: cookieName }, (cookie) => {
        if (cookie) {
          resolve(cookie);
        } else {
          reject(new Error(`Cookie with name ${cookieName} not found`));
        }
      });
    });
  }
}