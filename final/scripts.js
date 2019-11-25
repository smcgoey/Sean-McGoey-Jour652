var chart = c3.generate({
  bindto: '#genreByDecadeChart',
  data: {
    x: 'x',
    columns: [
      ['x', 1990, 2000, 2010],
      ['Funk/R&B', 1, 1, 0],
      ['Hip-hop', 3, 5, 10],
      ['Pop', 0, 2, 2],
      ['Rock', 3, 7, 3],
    ]
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895']
  }
});

var chart2 = c3.generate({
  bindto: '#venueChart',
  data: {
    // iris data from R
    columns: [
      ['Stamp', 76],
      ['McKeldin Mall', 4],
      ['Ritchie Coliseum', 4],
      ['The Clarice', 3],
      ['Xfinity Center', 3],
      ['All other venues', 9],
    ],
    type : 'pie',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
  }
});
