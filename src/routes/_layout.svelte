<script>
	import Footer from '../components/Footer.svelte';
import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer {segment}/>