<script>
	import { Chevron } from "photon-tools";
</script>

<!-- this is dumb. TODO: fix canvas view so page can overflow on its own -->
<div class="about-wrapper">
	<header>
		<div class="title">
			<!-- TODO: <img src="./SpatulaLayers.svg" alt="Spatula over layers" width="100" height="100" /> -->
			<h1>PASS-COMPOSER</h1>
		</div>
		<p class="description">
			Customize your postprocessing passes for threlte scenes.
		</p>
		<a class="canvas-link" href="/canvas">
			<span>Start Creating</span>
			<Chevron direction="RIGHT" />
		</a>
		<!-- TODO: <p>New to 3D in the browser?</p>
		<a class="canvas-link" href="/canvas">
			<span>Start learning</span>
			<Chevron direction="RIGHT" />
		</a> -->
	</header>

	<section>
		<h2>What is Pass Composer?</h2>
		<p>
			TODO... what are passes? what is threlte?
		</p>
		<p>Made with SvelteKit, threejs, and threlte</p>
		<a href="https://github.com/AlexWarnes/pass-composer">
			<span>GitHub Repo</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
	<section>
		<h2>What is threlte?</h2>
		<p>
			TODO...
		</p>
		<a href="https://threlte.xyz">
			<span>Learn more</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
	<section>
		<h2>Where can I use the generated code?</h2>
		<p>Anywhere you're using threlte!</p>
		<a href="https://svelte.dev/">
			<span>Learn Svelte</span>
			<Chevron direction="RIGHT" />
		</a>
		<a href="https://threlte.xyz/">
			<span>Learn threlte</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
</div>

<style>
	.about-wrapper {
		overflow: auto;
		height: 100%;
		padding: 0 0 3rem 0;
	}
	header {
		background: #fff1ef;
		padding: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-image: url('/CornerShapes.svg');
		height: 80vh;
		background-repeat: no-repeat;
		background-size: cover;
		color: #444444;
		margin: 0 0 2rem 0;
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		flex-wrap: wrap;
	}
	h1 {
		margin: 0;
	}
	.description {
		max-width: 25rem;
		line-height: 1.65rem;
		text-align: center;
	}
	a {
		margin: .875rem auto;
		padding: 0.5rem 0.75rem;
		border: none;
		border-radius: 4px;
		background: var(--threejs-black);
		color: white;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 0.8rem;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	a span {
		margin: 0 1rem 0 0;
	}

	a.canvas-link {
		background-color: var(--accent);
		font-size: 1rem;
		padding: 1rem 1.5rem;
	}

	section {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		padding: 0 1rem 2rem;
	}

	code {
		width: 100%;
		background-color: #F1F3F4;
		overflow: auto;
		border-radius: 2px;
		padding: 0.875rem;
		font-size: 14px;
		font-family: 'Fira Mono', monospace;
		/* color: #fafbfc; */
		display: block;
    margin: 1rem auto;
	}
</style>
