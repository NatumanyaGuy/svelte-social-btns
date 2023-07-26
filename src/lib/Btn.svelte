<script>
	import Twitter from './svgs/Twitter.svelte';
	import { validateURL } from '$lib/utils.js';
	import Facebook from './svgs/Facebook.svelte';
	import Github from './svgs/Github.svelte';
	import Instagram from './svgs/Instagram.svelte';
	import LinkedIn from './svgs/LinkedIn.svelte';
	import Reddit from './svgs/Reddit.svelte';
	import TikTok from './svgs/TikTok.svelte';
	import WhatsApp from './svgs/WhatsApp.svelte';
	import YouTube from './svgs/YouTube.svelte';
	export let url = '';
	export let type = 'filled'; //filled, ghost
	export let shape = 'circle'; //circle, square
	export let size = 'sm'; //sm, md, lg, xl

	let result = validateURL(url);
	$: valid = result.valid;
	$: platform = result.platform;
</script>

{#if valid}
	<a
		href={url}
		target="_blank"
		class="{`${size}-btn`} {shape} 
	{type == 'filled'
			? `fill-white bg-${platform.toLowerCase()}`
			: `fill-${platform.toLowerCase()} bg-white shadow`}
	"
	>
		{#if platform == 'Twitter'}
			<Twitter class="{`${size}-icon`} " />
		{:else if platform == 'Facebook'}
			<Facebook class="{`${size}-icon`} " />
		{:else if platform == 'Github'}
			<Github class="{`${size}-icon`} " />
		{:else if platform == 'Instagram'}
			<Instagram class="{`${size}-icon`} " />
		{:else if platform == 'LinkedIn'}
			<LinkedIn class="{`${size}-icon`} " />
		{:else if platform == 'Reddit'}
			<Reddit class="{`${size}-icon`} " />
		{:else if platform == 'TikTok'}
			<TikTok class="{`${size}-icon`} " />
		{:else if platform == 'WhatsApp'}
			<WhatsApp class="{`${size}-icon`} " />
		{:else if platform == 'Youtube'}
			<YouTube class="{`${size}-icon`} " />
		{/if}
	</a>
{/if}

<style>
	/*Icons*/
	.sm-icon {
		width: 1rem;
		height: 1rem;
	}

	.md-icon {
		width: 1.2rem;
		height: 1.2rem;
	}

	.lg-icon {
		width: 1.6rem;
		height: 1.6rem;
	}
	.xl-icon {
		width: 1.8rem;
		height: 1.8rem;
	}

	/*a tags*/
	.sm-btn {
		padding: 0.4rem;
		height: 2rem;
		width: 2rem;
	}
	.md-btn {
		padding: 0.6rem;
		height: 2.2rem;
		width: 2.2rem;
	}

	.lg-btn {
		padding: 0.8rem;
		height: 2.4rem;
		width: 2.4rem;
	}
	.xl-btn {
		padding: 1.2rem;
		height: 2.6rem;
		width: 2.6rem;
	}

	/*a*/
	a {
		outline: none;
		border: 0px;
		cursor: pointer;
		display: flex;
		z-index: 50;
		justify-content: center;
		align-items: center;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
	a:active {
		box-shadow: 0 0 1px darkslategray;
		transform: translateY(1px);
	}
	a:hover {
		opacity: 93%;
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	}

	/*Fills*/
	.fill-white {
		fill: #fff;
	}
	.fill-black {
		fill: #000000;
	}

	.fill-twitter {
		fill: #1d9bf0;
	}
	.fill-facebook {
		fill: #1877f2;
	}
	.fill-github {
		fill: #181717;
	}
	.fill-instagram {
		fill: #e4405f;
	}
	.fill-linkedin {
		fill: #0a66c2;
	}
	.fill-reddit {
		fill: #ff4500;
	}
	.fill-tiktok {
		fill: #000000;
	}
	.fill-whatsapp {
		fill: #25d366;
	}
	.fill-youtube {
		fill: #ff0000;
	}

	/*Backgrounds*/
	.bg-twitter {
		background-color: #1d9bf0;
	}
	.bg-facebook {
		background-color: #1877f2;
	}
	.bg-github {
		background-color: #181717;
	}
	.bg-instagram {
		background-color: #e4405f;
	}
	.bg-linkedin {
		background-color: #0a66c2;
	}
	.bg-reddit {
		background-color: #ff4500;
	}
	.bg-tiktok {
		background-color: #000000;
	}
	.bg-whatsapp {
		background-color: #25d366;
	}
	.bg-youtube {
		background-color: #ff0000;
	}
	.bg-white {
		background-color: #fff;
	}

	/*Shape*/
	.circle {
		border-radius: 99px;
	}
	.square {
		border-radius: 12px;
	}
	.shadow {
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	}
</style>
