import { useState } from "react";
import Apis from "../allTabs/Apis";
import Limits from "../allTabs/Limits";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");


  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
        <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Tab 1</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tab 2</li>
      </ul>
      <div className="outlet">
      {activeTab === "tab1" ? <Apis /> : <Limits />}
      </div>
    </div>
  );
};
export default Tabs;