<script lang="ts">
	import MainButton from "../components/MainButton.svelte";


</script>

<div>
    <div class="buttonContainer">
        <MainButton />
        <div class="or">Or</div>
        <MainButton />
    </div>
</div>

<style>
    .buttonContainer {
        display: flex;
        gap: 4rem;
    }
    .or {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }
</style>