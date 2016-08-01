(function() {
	// More info https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		history: false,
		// Display controls in the bottom right corner
		controls: false,
		// Enable keyboard shortcuts for navigation
		keyboard: false,
		
		multiplex: {
			// Example values. To generate your own, see the socket.io server instructions.
			secret: null, // Obtained from the socket.io server. Gives this (the master) control of the presentation
			id: 'b19627068fc58cb5', // Obtained from socket.io server
			url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
		},

		// More info https://github.com/hakimel/reveal.js#dependencies
		dependencies: [
			{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
			{ src: 'plugin/multiplex/client.js', async: true },
			// other dependencies...
			{ src: 'plugin/markdown/marked.js' },
			{ src: 'plugin/markdown/markdown.js' },
			{ src: 'plugin/notes/notes.js', async: true },
			{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});
})()