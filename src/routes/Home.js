import React, { useState } from 'react';
import './css/Home.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const axios = require('axios');
const api = axios.create({
  baseURL: `http://localhost:5000/`
})

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Home = () => {
  const [feedbackChannel, setFeedbackChannel] = useState(null);
  const handleOptionChange = (e) => {
    setFeedbackChannel(e.target.name);
  };

  const addFeedback = (e) => {

    e.preventDefault();

    api.post('add/:channel  ', { params: {
      channel: "hello",
    }})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
