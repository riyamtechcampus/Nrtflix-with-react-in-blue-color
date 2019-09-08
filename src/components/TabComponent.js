import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabsNav/TabDoor";
import TabDevices from "./tabsNav/TabDevices";
import TabPrice from "./tabsNav/TabPrice";
import "./css/TabNav.css";
import TabContentOne from "../components/TabContentOne";
import TabContentTwo from "../components/TabContentTwo";
import TabContentThree from "../components/TabContentThree";
export default class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? " tab-selected active" : null
              }`}
            >
              <TabDoor />
              <p className="lgScreen">
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
              <br />
                {/*  */}
                <span className="mdScreen" style={{marginTop: '0.4rem'}}>Cancel</span>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? " tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p className="lgScreen"
                style={{
                  marginTop: "-5.3125rem"
                }}
              >
                <strong>Watch anywhere</strong>
              </p>
                {/*  */}
                <span className="mdScreen" style={{marginTop: '-5.3125rem'}}>Devices</span>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? " tab-selected active" : null
              }`}
            >
              <TabPrice />
              <p className="lgScreen">
                <strong>Pick your price</strong>
              </p>
               <br />
              {/*  */}
              <span className="mdScreen">Price</span>
            </Tab>
          </TabList>
          {/* tab contents  */}
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentThree />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
