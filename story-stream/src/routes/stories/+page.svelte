<script>
	import { page } from '$app/stores'
	import { goto } from '$app/navigation';

	let showTranslation = false;
	const toggleTranslation = () => {
		showTranslation = !showTranslation;
	}
	const difficulty = $page.url.searchParams.get('difficulty').toLowerCase();
	const targetLanguage = $page.url.searchParams.get('targetLanguage');

	const nextStory = () => {
		console.log("going to new story");
		goto("/");
	}
</script>

<section>
	<h1>
		Here's {difficulty === 'advanced' ? 'an' : 'a'} {difficulty} story for you
	</h1>
	<div class="story-container">
		<div class="button-and-title">
			<h2>Story in {targetLanguage}</h2>
			<button class="new-story" on:click={nextStory}>
				Next story 
			</button>
		</div>
		<div class="story">		
			<p>
				在一个小村庄里，有一只叫做小橘子的小猫。小橘子非常好奇，喜欢探索周围的环境。一天，小橘子跑到了村子外面的森林里，开始了一次冒险。

				小橘子走着走着，突然遇到了一只大老虎。小橘子吓得跳了起来，但它聪明地想到了一个办法。它开始跳舞，唱歌，展示自己的特技。老虎被小橘子逗得哈哈大笑，忘记了吃掉它的念头。

				接着，小橘子继续它的冒险，来到了一个湖边。它看到了一只被网困住的小鱼。小橘子用它的爪子解开了网，释放了小鱼。小鱼非常感激地对小橘子说：“谢谢你，小橘子，你是个好心的猫。”

				小橘子听完后，觉得很开心。它知道，帮助别人是一件很快乐的事情。于是，它继续探险，希望能够帮助更多的朋友。

				从那天起，小橘子变得更加勇敢和善良。它的冒险之旅还在继续，而且它知道，无论遇到什么困难，它都会勇敢地面对。

				故事的结尾，小橘子学会了勇敢和善良，帮助了许多朋友，也收获了许多友谊。
			</p>
		</div>
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
				In a small village, there was a little cat named Xiao Ju Zi. Xiao Ju Zi was very curious and loved to explore its surroundings. One day, Xiao Ju Zi ventured into the forest outside the village and embarked on an adventure.

				As Xiao Ju Zi was walking, it suddenly encountered a big tiger. Xiao Ju Zi was frightened, but it cleverly came up with a solution. It started to dance, sing, and show off its tricks. The tiger was amused by Xiao Ju Zi's antics, forgetting all about eating it.

				Continuing its adventure, Xiao Ju Zi reached a lake. It saw a small fish trapped in a net. Xiao Ju Zi used its claws to free the fish from the net. The fish, grateful, said to Xiao Ju Zi, "Thank you, Xiao Ju Zi, you are a kind-hearted cat."

				After hearing this, Xiao Ju Zi felt very happy. It knew that helping others brought joy. So, it continued its adventure, hoping to help more friends.

				From that day on, Xiao Ju Zi became braver and kinder. Its adventure continued, and it knew that no matter what difficulties it encountered, it would face them bravely.

				At the end of the story, Xiao Ju Zi learned about bravery and kindness, helped many friends, and gained many friendships.
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
  }
</style>