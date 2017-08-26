javascript: (function() {
    if (!document.getElementById('protecc')) {
        if (window.location.href.match('facebook.com') || window.location.href.indexOf('facebook.com') > -1) {
        	var protecc = document.createElement('script');
        	protecc.setAttribute('type', 'text/javascript');
        	protecc.innerHTML = 'window.onauxclick = function(e){ window.open(e.target.previousSibling.src, \'_blank\'); }';
        	protecc.id = 'protecc';
        	document.body.appendChild(protecc);
        } else {
        	alert('Please load the script on a Facebook page.');
        }
    }
})();
