<script lang="ts">
	import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
    let { children } = $props();

</script>

<main>
    <Header />
    {@render children()}
    <Footer />
</main>