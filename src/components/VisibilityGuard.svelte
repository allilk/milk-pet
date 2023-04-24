<script>
    import { onMount } from "svelte";

    let el = null;

    let visible = false;
    let hasBeenVisible = false;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log("entry", entries[0]);
            visible = entries[0].isIntersecting;
            hasBeenVisible = hasBeenVisible || visible;
        });
        observer.observe(el);

        return () => observer.unobserve(el);
    });
</script>

<div bind:this={el}>
    <slot {visible} {hasBeenVisible} />
</div>
