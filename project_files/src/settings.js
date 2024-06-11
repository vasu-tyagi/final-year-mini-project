import React, { useEffect, useRef } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';

function AnalyticsPage() {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const navigate = useNavigate();

  const goToMenu = () => {
    // Clear local storage
    localStorage.clear();

    // Navigate to the menu page
    navigate('/menu');
  };

  useEffect(() => {
    // Red Team vs Blue Team Progress
    if (chart1Ref.current) {
      chart1Ref.current.destroy();
    }
    const ctx1 = document.getElementById('canvas1');
    chart1Ref.current = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
          {
            label: 'Red Team Progress',
            data: [20, 30, 40, 50, 60],
            backgroundColor: '#ff6384',
          },
          {
            label: 'Blue Team Progress',
            data: [10, 20, 30, 40, 50],
            backgroundColor: '#36a2eb',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              callback: function (value, index, values) {
                return value + '%';
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });

    // Attack Methods
    if (chart2Ref.current) {
      chart2Ref.current.destroy();
    }
    const ctx2 = document.getElementById('canvas2');
    chart2Ref.current = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Phishing', 'Malware', 'Social Engineering', 'SQL Injection'],
        datasets: [
          {
            label: 'Attack Methods',
            data: [25, 30, 20, 25],
            backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#4bc0c0'],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });

    // Learning Progress Over Time
    if (chart3Ref.current) {
      chart3Ref.current.destroy();
    }
    const ctx3 = document.getElementById('canvas3');
    chart3Ref.current = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
          {
            label: 'Overall Learning Progress',
            data: [10, 20, 40, 60, 80],
            borderColor: '#4bc0c0',
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 20,
              callback: function (value, index, values) {
                return value + '%';
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className='main-dashboard'>
      <div className='graficoA'>
        <canvas id='canvas1'></canvas>
      </div>
      <div className='graficoB'>
        <canvas id='canvas2'></canvas>
      </div>
      <div className='graficoC'>
        <canvas id='canvas3'></canvas>
      </div>
      <div>
      <button className="menu-button" onClick={goToMenu}>
      Go to Menu
    </button>
      </div>
    </div>
  );
}

export default AnalyticsPage;
