const app = require('express')()
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.get('/api', ({ query: { city, country } }, res) => {
	if (city && country) {
		axios.get('https://api.openweathermap.org/data/2.5/forecast', {
			params: {
				q: `${city},${country}`,
				mode: 'json',
				appid: process.env.OPEN_WEATHER_MAP_TOKEN
			}
		}).then(({ data }) => {
			res
				.status(200)
				.json({data})

		}).catch(() => {
			res
				.status(500)
				.json({
					error: {
						code: 500,
						message: 'There was a system error. Please try again later.'
					}
				})
		})

	} else {
		res
			.status(422)
			.json({
				error: {
					code: 422,
					message: 'We cannot process your request. Please make sure to provide a city and a country.'
				}
			})

	}
})

app.listen(4000, (err) => {
	err 
	? console.log('There was a problem starting the server.') 
	: console.log('Server started on http://localhost:4000')
})