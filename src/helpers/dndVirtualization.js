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
