<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores'

  export let items;
  export let onSelectPath;
  export let pathParameter;

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function handleItemClick(item) {
    isOpen = false;
    const path = new URLSearchParams($page.url.searchParams.toString());
    path.set(pathParameter, item); 

    if (onSelectPath) {
      goto(`${onSelectPath}?${path.toString()}`);
    } else {
      goto(`?${path.toString()}`);
    }
  }
</script>

<div class="dropdown">
  <button on:click={toggleDropdown} class:active={isOpen}>
    {$page.url.searchParams.has(pathParameter) ? $page.url.searchParams.get(pathParameter) : 'Make a selection'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="icon"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </button>
  {#if isOpen}
    <ul class="dropdown-menu">
      {#each items as item}
        <li on:click={() => handleItemClick(item)}>{item}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  :root {
    --primary-color: #007bff; /* Light blue color theme */
    --secondary-color: #f0f0f0; /* Light gray background color */
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  button {
    background-color: var(--primary-color);
    border: none;
    outline: none;
    color: #fff; /* White text color */
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%; /* Make the button as wide as the dropdown menu */
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  button.active {
    background-color: var(--secondary-color);
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

  .dropdown-menu {
    position: absolute;
    left: 0;
    z-index: 1000;
    background-color: var(--secondary-color);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1px 0;
    margin: 0;
    list-style: none;
    min-width: 165px;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dropdown-menu li:hover {
    background-color: #e6f2ff; /* Lighter blue color on hover */
  }
</style>
