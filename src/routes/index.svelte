<script>
	import { Chevron } from 'photon-tools';
</script>

<!-- this is dumb. TODO: fix canvas view so page can overflow on its own -->
<div class="about-wrapper">
	<header>
		<div class="title">
			<img src="./harmonic.svg" alt="Elbe Philharmonic Hall" height="100" width="100" />
			<h1>PASS-COMPOSER</h1>
		</div>
		<p class="description">Compose your postprocessing passes for threlte scenes.</p>
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
			pass-composer is a tool to help you compose postprocessing effects (or "passes") on 3d scenes
			made with threlte. Once you've got the effects adjusted to your liking, pass-composer let's
			you copy the code you'll need to drop into your project.
		</p>
		<p>Made with SvelteKit, threejs, and threlte</p>

		<h3 class="code-title">Example Imports:</h3>
		<pre><code
				>{`import { Pass, } from 'threlte';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';`}</code
			></pre>
		<h3 class="code-title">Example HTML:</h3>
		<pre><code>{`<Pass pass={new AfterimagePass(0.96)} />`}</code></pre>
		<a href="https://github.com/AlexWarnes/pass-composer">
			<span>GitHub Repo</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
	<section>
		<h2>What is threlte?</h2>
		<img src="./threlte_logo.png" alt="threlte logo" width="200" height="44" />
		<p>
			A component library for Svelte to build and render three.js scenes declaratively and
			state-driven in Svelte apps.
		</p>
		<a href="https://threlte.xyz">
			<span>Learn more</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
	<section>
		<h2>Where can I use the generated code?</h2>
		<p>Anywhere you're using threlte! Get started with a template REPL or StackBlitz:</p>
		<a
			href="https://svelte.dev/repl/4a50ab27ce0243a9a4b8159a6780accd?version=3.46.2"
			target="_blank"
			rel="noopener noreferrer"
			><span>Svelte REPL</span>
			<Chevron direction="RIGHT" />
		</a>
		<a
			href="https://stackblitz.com/edit/threlte-passcomposer?file=src/lib/PassComposer.svelte"
			target="_blank"
			rel="noopener noreferrer"
			><span>StackBlitz</span>
			<Chevron direction="RIGHT" />
		</a>
	</section>
	<section>
		<h2>Additional Resources</h2>
		<p>
			If you're new to any of these tools, no problem. Start small, start building, and have fun.
			Here are some additional resources to help you along the way:
		</p>
		<a href="https://svelte.dev/tutorial/basics">
			<span>Learn Svelte</span>
			<Chevron direction="RIGHT" />
		</a>
		<a href="https://threlte.xyz/">
			<span>Learn threlte</span>
			<Chevron direction="RIGHT" />
		</a>
		<a href="https://discoverthreejs.com/book/introduction/">
			<span>Learn threejs</span>
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
		background-image: url('/PassOverlay.svg');
		height: 80vh;
		background-repeat: no-repeat;
		background-size: cover;
		color: #444444;
		margin: 0 0 2rem 0;
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		font-size: 2rem;
		flex-wrap: wrap;
		text-align: center;
	}
	h1 {
		margin: 0 0 0 1rem;
	}

	h3.code-title {
		margin: 1.5rem 0 -0.5rem;
	}
	.description {
		max-width: 30rem;
		line-height: 1.65rem;
		text-align: center;
	}
	a {
		margin: 0.875rem auto;
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
		background-color: #f1f3f4;
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
