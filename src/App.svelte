<script>
	import FullViewList from './FullViewList.svelte'
	import ThumbViewList from './ThumbViewList.svelte'
	import TitleViewList from './TitleViewList.svelte'
	import proj_settings from './env.js'
	import { onMount } from "svelte";

	let searchQuery = ''
	let active_page = 1
	let view_id = 1
	let news=[]
	let selected_value = 6

	let url=proj_settings.api_url

	onMount(async function() {
		const res = await fetch(url);
		const json = await res.json();
		return news=json
	});

	function createSearchArray(query, target_array){
		if (query) {
			return  target_array.filter((item)=>
					item.title.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		else {
			return target_array
		}
	}

	function chunkArray(value, aim_array) {
		let chunk = Number(value);
		let i, j
		let temparray=[]
		for (i=0, j=aim_array.length; i<j; i+=chunk) {
			temparray.push(aim_array.slice(i,i+chunk));
		}
		return temparray
	}

	function currentPageArray(arr_index, res_array) {
		return res_array[arr_index-1]
	}


	$: search_arr = createSearchArray(searchQuery, news)
	$: chunk_array = chunkArray(selected_value, search_arr)
	$: result_arr = currentPageArray(active_page, chunk_array)

</script>

<div class="materials-container">
	<div class="materials-config-wr">
		<div class="config-icons-container">
			<div class="config-icon-wr" on:click={()=>view_id = 1}>
				<img alt="" src="">
			</div>
			<div class="config-icon-wr" on:click={()=>view_id = 2}>
				<img alt="" src="">
			</div>
			<div class="config-icon-wr" on:click={()=>view_id = 3}>
				<img alt="" src="">
			</div>
		</div>
		<div class="config-search-container">
			<div class="config-search-wr">
				<div class="config-search-icon-wr">
					<img alt="" src="">
				</div>
				<input bind:value={searchQuery} type="search"/>
			</div>
		</div>
	</div>
	<div class="materials-page-change-wr">
		<div class="materials-page-change-title">
			Количество элементов на странице
		</div>
		<div class="materials-page-select-wr">
			<select bind:value={selected_value} on:change={()=>active_page = 1}>
				<option value="6">6</option>
				<option value="12">12</option>
				<option value="18">18</option>
			</select>
		</div>
	</div>

	<div class="materials-workarea-wr">
		{#if result_arr }
			{#if view_id===1}
				{#if result_arr.length>0 }
				<div class="fullview-area-wr">
					{#each result_arr as item_new}
						<FullViewList
								img_src={item_new.cover}
								title={item_new.title}
								body={item_new.body}
								pubdate={item_new.pubdate}
								slug={item_new.slug}
						/>
					{/each}
				</div>
				{/if}
			{:else if view_id ===2 }
				{#if result_arr.length>0 }
				<div class="thumbview-area-wr">
					{#each result_arr as item_new}
						<ThumbViewList
								img_src={item_new.cover}
								title={item_new.title}
								slug={item_new.slug}
						/>
					{/each}
				</div>
				{/if}
			{:else if view_id ===3 }
				{#if result_arr.length>0 }
				<div class="titleview-area-wr">
					{#each result_arr as item_new}
						<TitleViewList
								title={item_new.title}
								slug={item_new.slug}
						/>
					{/each}
				</div>
				{/if}
			{/if}
		{/if}

	</div>
	<div class="materials-pagination-wr">
		{#if chunk_array}
			<div class="materials-pagination-item">
				{#each chunk_array as item}
					<div on:click={()=>active_page=Number(chunk_array.indexOf(item))+1}>{ Number(chunk_array.indexOf(item))+1}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>

</style>