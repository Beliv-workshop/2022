let dateData = [{
    event: '<b>Deadline for submissions</b>',
    date: 'July 6, 2022 at 11:59 pm AoE'
  },
  {
    event: '<b>Papers Reviews Assigned</b>',
    date: 'July 8, 2022'
  },
  {
    event: '<b>Reviews Due</b>',
    date: 'July 27, 2022'
  },
  {
    event: '<b>Notification of acceptance</b>',
    date: 'August 1, 2022'
  },
  {
    event: '<b>Deadline for revision</b>',
    date: 'August 24, 2022'
  },
  {
    event: '<b>Final notification</b>',
    date: 'August 26, 2022'
  },
  {
    event: '<b>Camera-ready due</b>',
    date: 'August 31, 2022 (5pm PST)'
  },
  // {event: 'BELIV workshop', date: 'Oct 21, 2018' },

]


/*
Code that adds data to div
*/

let dateWrapper = $("#side-dates");

dateWrapper.append("<h1>Important Dates</h1>");
makeEvent(dateData, dateWrapper);

function makeEvent(data, div) {
  for (let i in data) {
    div.append(`${data[i].event}</a>: ${data[i].date}<br>`);
  }
}