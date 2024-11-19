<script lang="ts">
export let text = 'button'
export let color = 'lightgray'
</script>


<button style={`background-color: ${color}`}>
    {text}
</button>


<style>
 button {
    height: 1rem;
    width: 7rem;
    border-radius: 2%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
 }
</style>