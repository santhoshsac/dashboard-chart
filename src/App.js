import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import LineChartComponent from './components/Charts/LineChartComponent';
import BarChartComponent from './components/Charts/BarChartComponent';
import PieChartComponent from './components/Charts/PieChatComponent';

const data = require("./mockData/chartsData.json")

function App() {
  return (
    <div>
      <Header/>
      <div className="app-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 sidebar">
              <Sidebar />
            </div>
            <div className="col-lg-10 pad-20">
              <div className="row">
                <div className="col-lg-6">
                  <div className="chart-item">
                    <h2>Line Chart</h2>
                    <LineChartComponent data={data.chatsData} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chart-item">
                    <h2>Bar Chart</h2>
                    <BarChartComponent data={data.chatsData} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chart-item">
                    <h2>Pie Chart</h2>
                    <PieChartComponent data={data.chatsData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
