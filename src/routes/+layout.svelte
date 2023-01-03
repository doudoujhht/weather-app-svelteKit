<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	let isPromptActive = false;
</script>

<div class="w-full shadow-lg">
	<nav class="text-white flex flex-col w-4/5 justify-between m-auto py-6 sm:flex-row">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a href="./">
			<div class=" text-2xl flex gap-4 cursor-pointer">
				<i class="fa-solid fa-sun text-2xl" />
				<p class="text-2xl">The Local Weather</p>
			</div>
		</a>
		<div class="flex gap-4">
			<i
				class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
				on:click={() => (isPromptActive = true)}
			/>
		</div>
	</nav>
</div>
{#if isPromptActive}
	<div
		class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
		style=""
		transition:fade
	>
		<div class="p-4 bg-white self-start mt-32 max-w-screen-md">
			<div class="text-black">
				<h1 class="text-2xl mb-1">About:</h1>
				<p class="mb-4">
					The Local Weather allows you to track the current and future weather of cities of your
					choosing.
				</p>
				<h2 class="text-2xl">How it works:</h2>
				<ol class="list-decimal list-inside mb-4">
					<li>Search for your city by entering the name into the search bar.</li>
					<li>
						Select a city within the results, this will take you to the current weather for your
						selection.
					</li>
					<li>
						Track the city by clicking on the "+" icon in the top right. This will save the city to
						view at a later time on the home page.
					</li>
				</ol>
				<h2 class="text-2xl">Removing a city</h2>
				<p>
					If you no longer wish to track a city, simply select the city within the home page. At the
					bottom of the page, there will be am option to delete the city.
				</p>
			</div>
			<button
				class="text-white mt-8 bg-weather-primary py-2 px-6"
				on:click={() => (isPromptActive = false)}>Close</button
			>
		</div>
	</div>
{/if}
<slot />
