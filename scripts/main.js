var contentfulClient = contentful.createClient({
  accessToken: '9b3f98f7a8648b0c76f7f43338b478be21b2b2cb13b7d1b1d81488de3ce2d3b3',
  space: 'iyieuwr67lde'
})

function renderEvents(events) {
  return '<div class="events">' +
    events.map(renderSingleEvent).join('\n') +
    '</div>'
}

// Load events in a year
function loadEventsInYear(year) {
  contentfulClient.getEntries({
    content_type: 'events',
    'fields.date[lte]': (year+1)+'-01-01T00:00:00Z',
    'fields.date[gte]': year+'-01-01T00:00:00Z',
    order: 'fields.date'
  })
  .then(function(entries) {
    $('.eventsContainer #eventSpan-'+year).html(renderEvents(entries.items))
  })
}

var currentYear = (new Date()).getFullYear();
var previousYear = currentYear - 1;
var nextYear = currentYear + 1;

// Load events in the current season
// contentfulClient.getEntries({
//   content_type: 'events',
//   'fields.date[lte]': currentYear+'-01-01T00:00:00Z',
//   'fields.date[gte]': previousYear+'-08-01T00:00:00Z',
//   order: 'fields.date'
// })
// .then(function(entries) {
//   $('.eventsContainer #eventSpan-'+previousYear).html(renderEvents(entries.items));
//   loadEventsInYear(currentYear);
// })

var monthName = new Array()
monthName[1] = 'Jan.'
monthName[2] = 'Feb.'
monthName[3] = 'Mar.'
monthName[4] = 'Apr.'
monthName[5] = 'May'
monthName[6] = 'June'
monthName[7] = 'July'
monthName[8] = 'Aug.'
monthName[9] = 'Sep.'
monthName[10] = 'Oct.'
monthName[11] = 'Nov.'
monthName[12] = 'Dec.'

function formatEventDate(fields) {
  if (fields.multipleDates)
    return fields.multipleDates
  else
    var [year, month, day] = fields.date.split('-')
    return monthName[Number(month)] + ' ' + parseInt(day, 10) + ', ' + year
}

function formatEventURL(url) {
  if (url)
    return '<p><a href="' + url + '">Learn More</a></p>'
  else
    return ''
}

function renderSingleEvent(event) {
  var fields = event.fields
  // console.log(fields)
  return '<div class="event drawer drawerClosed">' +
    '<div class="eventHead">' +
      '<span class="eventDate">' +
        formatEventDate(fields) +
      '</span>' +
      '<div class="eventHeadline">' +
        '<span class="eventName">' +
          fields.name +
        '</span>' +
        '<span class="eventLocation">' +
          fields.location +
        '</span>' +
      '</div>' +
      '<div class="drawerToggle"></div>' +
    '</div>' +
    '<div class="eventDetails drawerContents">' +
      marked((fields.description.replace(/(^|[^\n])\n(?!\n)/g, "$1<br />") || "")) +
      formatEventURL(fields.url) +
    '</div>' +
    '</div>'
}

function showBio(name) {
  $('#overlay').removeClass('hide');
  $('#overlayContent .bios').hide();
  $('#overlayContent .bios h3:contains('+name+')').closest('.bios').show();
}

$(function() {

  loadEventsInYear(currentYear);
  loadEventsInYear(previousYear);
  loadEventsInYear(nextYear);

  $('.pastEvents').on('click', function() {
    event.preventDefault();
    var selectedYear = $(this).data('year');
    loadEventsInYear(selectedYear);

    var pos = $('#eventSpan-'+selectedYear).offset();
    $('body').animate({ scrollTop: pos.top - 30 });
  });

  $('body').on('click', '.drawer', function() {
    $(this).toggleClass('drawerClosed');
  });

  $('body').on('click', '#nav3', function() {
    $('#reich').removeClass('drawerClosed');
    $(document).scrollTop($('#reich').offset().top);
  });

  var possibleBioMatch = decodeURI(window.location.hash.substring(1));

  if (window.location.hash) {
    if (window.location.hash.substring(1) == 'stevereichprojects') {
      $('#reich').removeClass('drawerClosed');
      $(document).scrollTop($('#reich').offset().top);
    }
    else if ($('#overlayContent .bios h3:contains('+possibleBioMatch+')').length > 0) {
      console.log('Match Found');
      showBio(possibleBioMatch);
    }
  }

  $('body').on('click', '#overlayCloseButton, #overlayBackground', function() {
    $('#overlay').toggleClass('hide');
    if (history.pushState) { history.pushState(null, null, '/'); }
    else { location.hash = '/'; }
  });

  $('body').on('click', '.personWithBio', function() {
    var a = $(this).text();
    showBio(a);
    if (history.pushState) { history.pushState(null, null, '#'+a); }
    else { location.hash = '#'+a; }
  });

});
