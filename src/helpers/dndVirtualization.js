export function dndVirtualization(node) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(
            (entry) => {
                node.dispatchEvent(
                    new CustomEvent("dndVirtualization", {
                        detail: entry.isIntersecting,
                    })
                );
            },
            {
                threshold: 0.5,
                root: node.parentElement,
            }
        );
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
