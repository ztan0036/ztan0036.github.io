$(document).ready(function() {

    // Add jQuery here
    
    // On .nav click, toggleClass ON or OFF showme.
    
  $('.nav').click(function() {
    $('.menu').toggleClass('showme');
  });
    
  
});

$(document).ready(function() {
  const win = $(window);
  const doc = $(document);
  const progressBar = $('progress');
  const progressLabel = $('.progress-label');
  const setValue = () => win.scrollTop();
  const setMax = () => doc.height() - win.height();
  const setPercent = () => Math.round(win.scrollTop() / (doc.height() - win.height()) * 100);
  progressLabel.text(setPercent() + '%');
  progressBar.attr({ value: setValue(), max: setMax() });
  doc.on('scroll', () => {
    progressLabel.text(setPercent() + '%');
    progressBar.attr({ value: setValue() });
  });
  win.on('resize', () => {
    progressLabel.text(setPercent() + '%');
    progressBar.attr({ value: setValue(), max: setMax() });
  })
});