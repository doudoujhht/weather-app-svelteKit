import axios from 'axios';
	import { weatherAPIKey } from '../../config';
export async function load({ params }: { params: { slug: string } }) {
	let response;
	try {
		const res = await axios.request({
			method: 'get',
			url: `https://api.weatherapi.com/v1/forecast.json?q=${params.slug}&days=5&key=${weatherAPIKey}`,
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		});
		response = res.data;
		console.log(response)
	} catch (error) {
		return error
	}
	return response;
}
