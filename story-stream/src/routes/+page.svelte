<script>
	import Dropdown from '../Dropdown.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Please select your target language.
	</h1>
	<Dropdown items={['Chinese', 'Swedish', 'English']} 
			  onSelectPath={'/difficulty-selection'}
			  pathParameter={'targetLanguage'}
	/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
