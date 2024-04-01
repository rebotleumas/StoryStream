import { stories } from './chinese/beginner/stories.js';

export function load() {
	console.log(stories);
	return {
		stories
	};
}