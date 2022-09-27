// const { brotliDecompressSync } = require("zlib");

window.onload = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const url = data[0].url
    console.log(url)
    const h1 = document.createElement("h1");
    h1.innerText = "Kitten Pic";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    document.body.append(h1, img);
}
