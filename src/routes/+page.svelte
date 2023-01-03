<script lang="ts">
	import { mapboxAPIKey } from '../config';
	import axios from 'axios';
	import { scale } from 'svelte/transition';
	let value: string;
	let resArray: any[] = [];
	async function handleInput() {
		let res = await axios(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${mapboxAPIKey}`
		);
		resArray = res.data.features;
		console.log(resArray);
	}
</script>

<input
	type="text"
	class="text-white w-4/5 mx-[10%] bg-transparent border-b-2 border-b-white
focus:outline-none focus:border-b-weather-secondary pt-6 text-xl pb-2"
	placeholder="Search for a city or state"
	bind:value
	on:input={handleInput}
/>
<div class="bg-weather-secondary w-4/5 m-auto mt-3 text-white">
	{#each resArray as city}
		<p class="py-2 px-1 cursor-pointer border-b-2 border-b-weather-primary" transition:scale>
			{city.place_name}
		</p>
	{/each}
</div>
