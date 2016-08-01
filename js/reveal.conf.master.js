(function() {
	// More info https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		history: true,
		
		multiplex: {
			// Example values. To generate your own, see the socket.io server instructions.
			secret: '14700598456217077175', // Obtained from the socket.io server. Gives this (the master) control of the presentation
			id: 'b19627068fc58cb5', // Obtained from socket.io server
			url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
		},

		// More info https://github.com/hakimel/reveal.js#dependencies
		dependencies: [
			{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
			{ src: 'plugin/multiplex/master.js', async: true },
			// and if you want speaker notes
			{ src: 'plugin/notes-server/client.js', async: true },
			// other dependencies...
			{ src: 'plugin/markdown/marked.js' },
			{ src: 'plugin/markdown/markdown.js' },
			{ src: 'plugin/notes/notes.js', async: true },
			{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});	
})()
