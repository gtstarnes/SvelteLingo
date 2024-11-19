<script lang="ts">
export let text = 'button'
export let color = 'lightgray'
</script>


<button>
    <div style={`background-color: ${color}`}>{text}</div>
</button>


<style>
 button {
    height: 1rem;
    width: 2rem;
    border-radius: 2%;
 }
</style>