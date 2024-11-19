<script lang="ts">
	import MainButton from "../components/MainButton.svelte";


</script>

<div>
    <div class="buttonContainer">
        <MainButton text="Log In" color="white" />
        <div class="or">Or</div>
        <MainButton text="Sign Up" color="gold" />
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