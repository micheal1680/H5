var obj = {
	one: function(response) {
		response.write("<h1>one</h1>")
	},
	two: function(response) {
		response.write("<p>two</p>")
	}
}

module.exports = obj;