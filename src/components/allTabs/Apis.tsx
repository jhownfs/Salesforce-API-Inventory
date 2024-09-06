import { Aouth } from "../../services/Aouth";

const Apis = () => {
  
  const Auth = () => {
    
    const athenticationMethod = new Aouth();
    athenticationMethod.getCookie('sid').then((cookie) => {
      console.log('Cookie:', cookie);
    }).catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    <div className="FirstTab">
    <button onClick={Auth}>My API's</button>
  </div>
  );
};

export default Apis;