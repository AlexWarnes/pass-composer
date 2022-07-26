<script>
	import { GitHub } from "photon-tools";
</script>

<nav>
	<ul>
		<li>
			<a class="home" href="/" title="Home" aria-label="Home">
				<img src="./harmonic.svg" alt="Elbe Philharmonic Hall" height="48" width="48" />
				<span>PASS COMPOSER</span>
			</a>
		</li>
		<span class="flex-spacer" aria-hidden="true" />
		<li>
			<a href="/canvas" aria-label="Canvas">CANVAS</a>
		</li>
		<li class="last">
			<a href="https://github.com/AlexWarnes/pass-composer" title="GitHub" aria-label="GitHub">
				<GitHub />
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		background-color: #fafbfc;
		width: 100%;
		margin: 0;
		padding: 0 2rem;
		height: var(--top-nav-height);
	}

  li, a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.last {
    margin: 0 0 0 3rem;
  }

	.home {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.home span {
		margin: 0 0 0 0.875rem;
	}

	a {
		color: var(--threejs-black);
		text-decoration: none;
    padding: 0 1rem;
    transition: background-color .2s ease;
	}
  a:hover {
    background-color: #00000008;
  }
	a:visited {
		color: var(--threejs-black);
	}
</style>
