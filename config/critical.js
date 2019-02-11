module.exports = {
	dist: {
		options: {
			dimensions: [{
				width: 360,
				height: 640
		  },
		  {
				width: 1366,
				height: 768
		  },
			{
				width: 1440,
				height: 900
			},
			{
				width: 1920,
				height: 1080
			}],
			inline: true
		},
		files: [
			{src: '<%= paths.html.dest %>index.html', dest: '<%= paths.html.dest %>index.html'},
			{src: '<%= paths.html.dest %>projects.html', dest: '<%= paths.html.dest %>projects.html'},
			{src: '<%= paths.html.dest %>people.html', dest: '<%= paths.html.dest %>people.html'},
			{src: '<%= paths.html.dest %>bryan-profile.html', dest: '<%= paths.html.dest %>bryan-profile.html'},
			{src: '<%= paths.html.dest %>two-column.html', dest: '<%= paths.html.dest %>two-column.html'}
		]
	}
}