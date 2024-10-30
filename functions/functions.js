

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
      
	};
})(jQuery);

function timeElapse() {
    const now = new Date();
    const start = new Date(2004, 0, 6); // Sets start date to January 6, 2004

    let seconds = Math.floor((now - start) / 1000);

    // Calculate elapsed days, hours, minutes, and seconds
    const days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24); // Remaining seconds after days

    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    seconds %= 3600; // Remaining seconds after hours

    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secondsRemaining = (seconds % 60).toString().padStart(2, '0');

    // Display the result in the format you want
    const result = `Days: <span class="digit">${days}</span>, Hours: <span class="digit">${hours}</span>, Minutes: <span class="digit">${minutes}</span>, Seconds: <span class="digit">${secondsRemaining}</span>`;
    document.getElementById("clock").innerHTML = result;

    // Format the start date in DD/MM/YYYY format
    const formattedDate = start.getDate().toString().padStart(2, '0') + '/' +
                          (start.getMonth() + 1).toString().padStart(2, '0') + '/' +
                          start.getFullYear();

    const messageText = `THE WORLD JUST GOT LUCKIER SINCE ${formattedDate}`;
    document.getElementById("message-box").innerHTML = messageText;
}

// Example usage to update every second
setInterval(timeElapse, 1000);


// Call the function immediately and set interval for every second update
timeElapse();
setInterval(timeElapse, 1000); // Update every second




