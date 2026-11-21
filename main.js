(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Contact form: opens the visitor's email app with the answers filled in.
  // Swap this for a real form service later by giving the <form> an action and removing this block.
  var form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lines = [
        'First name: ' + (f.get('first-name') || ''),
        'Last name: ' + (f.get('last-name') || ''),
        'Email: ' + (f.get('email') || ''),
        'Phone: ' + (f.get('phone') || ''),
        'Full address: ' + (f.get('address') || ''),
        'Services required: ' + (f.get('services') || ''),
        'Regularity: ' + (f.get('regularity') || '')
      ];
      var url = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent('Website enquiry') +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = url;
    });
  }
})();
