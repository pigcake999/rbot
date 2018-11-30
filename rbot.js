const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot Started!")
  client.user.setActivity("for deals", { type: "WATCHING"})
})

client.on("message", (msg) => {
	if (msg.content.substr(0,2).toLowerCase() == "r ") {
		address = msg.content.substr(2, msg.content.length)
		axios.get("https://www.redfin.com/stingray/do/location-autocomplete?location="+encodeURI(address)+"&start=0&count=10&v=2&market=dc&al=1&iss=false&ooa=true&mrs=false").then(function (response) {
		    // handle success
		    msg.channel.send("https://redfin.com"+JSON.parse(response.data.substr(4, response.data.length)).payload.exactMatch.url);
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		    msg.channel.send("House not found!")
		  });
	}
})


client.login("NTE2OTM1NTkwNTEyNDI3MDI4.DuNE6g.QQLhc7gJbp1NZEWwjYNYLnYjGjw");