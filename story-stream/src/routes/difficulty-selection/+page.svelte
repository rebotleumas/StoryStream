<script>
	import Dropdown from '../../Dropdown.svelte';
</script>

<section>
	<h1>
		At what level do you know XXX
	</h1>
	<Dropdown items={['Beginner', 'Intermediate', 'Advanced']} 
			  pathParameter={'difficulty'}
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