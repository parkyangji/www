Chart.defaults.font.size = 18;

//차트1//

const data1 = {
    labels:  ['2022','2021','2020','2019','2018'],
    datasets: [{
      label: '자산총계',
      data: [7011, 6163, 5401, 5289, 4415],
      backgroundColor: [
        'rgb(31, 41, 111)'
      ]
    },
    { 
      label: '부채총계',
      data: [3342, 3329, 2949, 2860, 1960],
      backgroundColor: [
        'rgb(207, 207, 207)'
      ]
    },
    { 
      label: '자본총계',
      data: [3669, 2835, 2452, 2429, 2455],
      backgroundColor: [
        'rgb(52, 139, 205)'
      ]
    }]
  };
        
  const config1 = {
    type: 'bar',
    data: data1, //객체배열 변수
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 16
            }
          }
        }
      }
    },
  };

  const myChart1 = new Chart(
        document.getElementById('myChart1'),
        config1
  );


// 차트2 //

const data2 = {
    labels:  ['2022','2021','2020','2019','2018'],
    datasets: [{
      label: '매출액',
      data: [6049, 3813, 2616, 2489, 2749],
      stack: 'combined',
      borderColor: [
        'rgb(31, 41, 111)'
      ],
      backgroundColor: 'white',
      borderWidth : 3
    },
    { 
      label: '영업이익',
      data: [1291, 581, 28, 134, 396],
      type: 'bar',
      backgroundColor: [
        'rgb(207, 207, 207)'
      ],
      yAxisID: 'Y_right',
    },
    { 
      label: '당기순이익',
      data: [1070, 312, 26, 2, 280],
      type: 'bar',
      backgroundColor: [
        'rgb(52, 139, 205)'
      ],
      yAxisID: 'Y_right'
    }]
  };
        
  const config2 = {
    type: 'line',
    data: data2, //객체배열 변수
    options: {
      responsive: false,
      tooltips: {
        mode: 'nearest'
      },
      scales: {
        y: {
          ticks: {
            font: {
              size: 16
            }
          },
          beginAtZero: false
        },
        Y_right : {
          beginAtZero: true,
          position : 'right',
          ticks : {
            min:0,
            max:1350,
            stepSize: 150
          }
        }
      },
      elemetns: {
        line: {
          tension: 0
        },
        point : {
          radius: 4,
          borderWidth: 5,
          pointStyle: 'circle'
        }
      }
    }
  };


  const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config2
  );

// 차트3 //

const data3 = {
  labels:  ['2022.09','2022.06','2022.03','2021.12','2021.09'],
  datasets: [{
    label: '영업활동 현금흐름',
    data: [96, 236, 265, 388, 388],
    stack: 'combined',
    borderColor: [
      'rgb(31, 41, 111)'
    ],
    backgroundColor: 'white',
    borderWidth : 3
  },
  { 
    label: '당기순이익',
    data: [214, 213, 476, 104, 289],
    type: 'bar',
    backgroundColor: [
      'rgb(207, 207, 207)'
    ],
  },
  { 
    label: '보통주 주가(단위 :원)',
    data: [11850, 17750, 19750, 23100, 21300],
    type: 'bar',
    backgroundColor: [
      'rgb(52, 139, 205)'
    ],
    yAxisID: 'Y_right'
  }]
};
      
const config3 = {
  type: 'line',
  data: data3, //객체배열 변수
  options: {
    responsive: false,
    tooltips: {
      mode: 'nearest'
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 16
          }
        },
        beginAtZero: false
      },
      Y_right : {
        beginAtZero: true,
        position : 'right',
        ticks : {
          min:0,
          max:23400,
          stepSize: 2600
        }
      }
    },
    elemetns: {
      line: {
        tension: 0
      },
      point : {
        radius: 4,
        borderWidth: 5,
        pointStyle: 'circle'
      }
    }
  }
};


const myChart3 = new Chart(
      document.getElementById('myChart3'),
      config3
);

