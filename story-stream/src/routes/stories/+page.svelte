<script>
	import { page } from '$app/stores'
	import { goto } from '$app/navigation';
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';    

  afterUpdate(async () => {
			mandarinspot.annotate();	
	});
	export let data;

	let showTranslation = false;
	const toggleTranslation = () => {
		showTranslation = !showTranslation;
	}
	const difficulty = $page.url.searchParams.get('difficulty').toLowerCase();
	const targetLanguage = $page.url.searchParams.get('targetLanguage');
	let story = data.stories[0].story;
	let storyCounter = 0;

	$: englishStory = story.english;
	$: targetLanguageStory = story.targetLanguage;

	const nextStory = () => {
		storyCounter += 1;
		storyCounter = storyCounter % data.stories.length;
		story = data.stories[storyCounter].story;
	}
</script>

<section> 
	<script src="//mandarinspot.com/static/mandarinspot.min.js" charset="UTF-8"></script>
	<h1>
		Here's {difficulty === 'advanced' ? 'an' : 'a'} {difficulty} story for you:
	</h1>
	<div class="story-container" id="story-container">
		<div class="button-and-title">
			<h2>Story in {targetLanguage}</h2>
			<button class="new-story" on:click={nextStory}>
				New story
			</button>
		</div>
		{#key targetLanguageStory}
		<div class="story" id="story">
			<p>
				{targetLanguageStory}
			</p>
		</div>
		{/key}
		<div class="story">	
		    <button on:click={toggleTranslation} class:active={showTranslation} class="translation-button">
		    	{showTranslation ? 'Hide' : 'Show'} translation
			    <svg
			      xmlns="http://www.w3.org/2000/svg"
			      viewBox="0 0 24 24"
			      class="icon"
			    >
			      <path d="M7 10l5 5 5-5z" />
			    </svg>
			</button>	
			{#if showTranslation}
			<p>
				{englishStory}
			</p>
			{/if}
		</div>
	</div>	
</section>

<style>
    :root {
    	--primary-color: #007bff; /* Light blue color theme */
    	--secondary-color: #f0f0f0; /* Light gray background color */
  	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	p {
		width: 100%;
	}

	h1 {
		width: 100%;
	}

	h2 {
		width: fit-content;
	}

	div.button-and-title {
		display: flex;
		align-items: center;
	}

	div.story {
		background-color: white;
		padding: 3vmin;
		border-radius: 2vmin;
		margin-bottom: 3vmin;
	}

	div.story-container {
		margin: 3vmin;
	}

  .dropdown {
    position: relative;
    display: inline-block;
  }

  button.translation-button {
    background-color: white;
    border: none;
    outline: none;
    color: black;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%; /* Make the button as wide as the dropdown menu */
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  button.new-story:hover {
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }

  .icon {
    width: 1em;
    height: 1em;
    margin-left: 5px;
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }

  button.active .icon {
    transform: rotate(180deg);
  }

  button.new-story {
  	margin-left: 75%;
  	border-radius: 1vmin;
  	border: none;
  	height: 50%;
  	white-space: nowrap;
  	padding: 1vmin;
  	cursor: pointer;
  	padding-left: 4vmin;
  	padding-right: 4vmin;
  	background-color: #007bff;
  	color: white;
  	font-family: Hack, monospace;
    transition: all 0.5s;
  }

  .next-story-arrow {
  	height: 0vmin;
  	visibility: hidden;
  }

  .new-story:hover > next-story-arrow {
  	visibility: visible;
  	height: 5vmin;
  }
</style>