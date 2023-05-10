export const getFile = async (url) => {
    const res = await fetch(new Request(url));

    console.log(res.blob());
};
