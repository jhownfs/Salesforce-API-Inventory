import { doAuthenticate } from "../../services/authenticate";
import { jsforce } from "../../services/content-script";

let cookieSessionId: string;
const Apis = () => {
  
  // chrome.runtime.sendMessage({message:"ready"})
  // .then((response) => {
  //     console.info("Background received response from tab with title '%s' and url %s",
  //         response.sessionIDSF );
  //         cookieSessionId = response.sessionIDSF;
  //   })
  //   .catch((error) => {
  //       console.warn("Background could not send message to tab %d", error)
  //   });

  async function login() {
    console.log("login called");
    console.log("cookieSessionId = " + await jsforce());
  }

  return (
    <div className="FirstTab">
    <button onClick={login}>My API's</button>
  </div>
  );
};

export default Apis;