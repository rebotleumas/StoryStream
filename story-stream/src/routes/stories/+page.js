import { stories } from './chinese/beginner/stories.js';

export function load({ url }) {
	const difficulty = url.searchParams.get('difficulty').toLowerCase();
	const targetLanguage = url.searchParams.get('targetLanguage').toLowerCase();
	const relevantStories = stories;

	return {
		"stories": stories
	};
}