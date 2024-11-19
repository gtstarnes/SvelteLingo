<script lang="ts">
	import MainButton from "../components/MainButton.svelte";


</script>

<div>
    <div class="buttonContainer">
        <MainButton text="Log In" color="white" />
        <div class="or">OR</div>
        <MainButton text="Sign Up" color="gold" />
    </div>
</div>

<style>
    .buttonContainer {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
    .or {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 1.5rem;
    }
</style>