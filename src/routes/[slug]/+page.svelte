<script lang="ts">
	import axios from 'axios';
	import Hourly from './hourly.svelte';
	export let data: {
		location: {
			name: string;
			region: string;
			country: string;
			lat: number;
			lon: number;
			tz_id: string;
			localtime_epoch: number;
			localtime: string;
		};
		current: {
			last_updated_epoch: number;
			last_updated: string;
			temp_c: number;
			temp_f: number;
			is_day: number;
			condition: {
				text: string;
				icon: string;
				code: number;
			};
			wind_mph: number;
			wind_kph: number;
			wind_degree: number;
			wind_dir: string;
			pressure_mb: number;
			pressure_in: number;
			precip_mm: number;
			precip_in: number;
			humidity: number;
			cloud: number;
			feelslike_c: number;
			feelslike_f: number;
			vis_km: number;
			vis_miles: number;
			uv: number;
			gust_mph: number;
			gust_kph: number;
		};
		forecast: { forecastday: [[Object], [Object], [Object], [Object], [Object]] };
	};
	console.log(data);
</script>

{#if data}
	<div class="flex text-white justify-center flex-col items-center">
		<div
			class="flex text-white justify-center flex-col items-center border-b-2
		w-[100vw] border-opacity-10 border-b-white pb-14"
		>
			<h1 class=" text-3xl mt-7">{data.location.name}</h1>
			<p class="text-[7rem]">{Math.round(data.current.temp_c)}°</p>
			<p class="text-xl">Feels like {Math.round(data.current.feelslike_c)}°</p>
			<p class="text-xl">{data.current.condition.text}</p>
			<img src={data.current.condition.icon} alt="" class="scale-110" />
		</div>
		<div>
			<p>Hourly Forecast</p>
			<div class=" w-[104px] m-0 overflow-hidden inline-flex flex-shrink-0">
				{#each data.forecast.forecastday[0].hour as forecastHour, index}
					<Hourly
						hour={index}
						imgUrl={forecastHour.condition.icon}
						temp_c={Math.round(forecastHour.temp_c)}
					/>
				{/each}
			</div>
		</div>
	</div>
{:else}
	{data}
{/if}
