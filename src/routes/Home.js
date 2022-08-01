import React, { useState, useEffect } from 'react';
import './css/Home.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
const axios = require('axios');

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [feedbackChannel, setFeedbackChannel] = useState(null);
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [pickUpCount, setPickUpCount] = useState(0);
  const [dineInCount, setDineInCount] = useState(0);
  
  const handleOptionChange = (e) => {
    setFeedbackChannel(e.target.name);
  };
  
  axios.get('http://localhost:5000/getfeedbacks')
  .then((response) => {

    const services = response.data;
    let delivery = 0;
    let pickup = 0
    let dinein = 0;

    Object.values(services).map( (v) => {
      switch(v.service) {
        case 'delivery':
          delivery++;
        case 'retirada':
          pickup++;
        case 'salao':
          dinein++;
      }
    })

    setDeliveryCount(delivery);
    setPickUpCount(pickup);
    setDineInCount(dinein);
  })
  .catch((error) => {
    console.log(error);
  });

  const addFeedback = (e) => {

    axios.post('http://localhost:5000/addfeedback', {
      service: feedbackChannel,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const data = {
    labels: ['Delivery', 'Retirada', 'Salão'],
    datasets: [
      {
        label: '# of Votes',
        data: [deliveryCount, pickUpCount, dineInCount  ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="Home">
      <form className="Form">
        <div className="Options">
          <label>
            Delivery
            <input
              name="delivery"
              type="checkbox"
              checked={feedbackChannel === 'delivery'}
              onChange={(e) => handleOptionChange(e)}
            />
          </label>
          <label>
            Salão
            <input
              name="salao"
              type="checkbox"
              checked={feedbackChannel === 'salao'}
              onChange={(e) => handleOptionChange(e)}
            />
          </label>
          <label>
            Retirada
            <input
              name="retirada"
              type="checkbox"
              checked={feedbackChannel === 'retirada'}
              onChange={(e) => handleOptionChange(e)}
            />
          </label>
        </div>
        <div className="Submit">
          <button onClick={(e) => addFeedback(e)}> Submit</button>
        </div>
      </form>
      <div className="Doughnut">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Home;
