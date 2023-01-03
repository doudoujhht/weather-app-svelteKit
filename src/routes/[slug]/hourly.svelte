<script lang="ts">
	export let hour: number;
	export let imgUrl: string;
	export let temp_c: number;
</script>

<div class="flex items-center flex-col w-1/6 text-xl h-[100px] ">
	<p>{hour === 12 ? hour : hour % 12} {hour > 12 ? 'PM' : 'AM'}</p>
	<img src={imgUrl} alt="" />
	<p>{temp_c}°</p>
</div>
