// const { brotliDecompressSync } = require("zlib");

window.onload = async () => {
    // get the response from the API
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    // parse the response
    const data = await res.json();
    // obtain the url for the random cat image
    const url = data[0].url

    // create the title div
    const h1 = document.createElement("h1");
    h1.innerText = "Kitten Pic";
    // create img div
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("id", "img");
    // creating a dataset likes value
    img.dataset.likes = 0;

    // voting div creation
    const votingDiv = document.createElement("div");
    const popularity = document.createElement("h3");
    popularity.setAttribute("id", "popularity");
    popularity.innerText = `Popularity Score: ${img.dataset.likes}`
    const upButton = document.createElement("button");
    upButton.innerText = "Upvote";
    upButton.setAttribute("type", "button");
    upButton.setAttribute("id", "button-up");
    const downButton = document.createElement("button");
    downButton.innerText = "Downvote";
    downButton.setAttribute("type", "button");
    downButton.setAttribute("id", "button-down");
    votingDiv.append(popularity, upButton, downButton);

    const catButton = document.createElement("button");
    catButton.innerText = "New Cat";
    catButton.setAttribute("type", "button");
    catButton.setAttribute("id", "button");
    // creating the comments section div
    const commentsSection = document.createElement("div");
    commentsSection.setAttribute("id", "comments-div");

    // create form
    const form = document.createElement("form");
    form.setAttribute("id", "form");
    // create the text area
    const textArea = document.createElement("textarea");
    textArea.setAttribute("id", "textarea");
    // const submit button;
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit"
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("id", "button-submit")
    // create the comments list
    const ul = document.createElement("ul");
    ul.setAttribute("id", "comments");
    form.append(textArea, submitButton);

    // appending to the page
    document.body.append(catButton, h1, img, votingDiv, form, ul);

    // add event listener to the submit button
    submitButton.addEventListener("click", (event) => {
        // event.preventDefault() ====> only necessary if we dont specify type button
        console.log(event);
        const li = document.createElement("li");
        li.innerText = textArea.value;
        ul.appendChild(li);
        textArea.value = "";

    });
    // add event listener to the button to make it fetch new cat image
    catButton.addEventListener("click", async () => {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        const url = data[0].url;

        const imgNew = document.querySelector("img");
        imgNew.setAttribute("src", url);
        imgNew.dataset.likes = 0;
        // finds the popularity score
        const popularityScore = document.getElementById("popularity");
        // and sets it equal to the current images dataset of likes
        popularityScore.innerText = `Popularity Score: ${imgNew.dataset.likes}`
        // reset comments
        ul.innerText = "";
        textArea.value = "";
    });

    // add event listeners to the voting buttons;
    upButton.addEventListener("click", () => {
        const popularityScore = document.getElementById("popularity");
        const currentImage = document.getElementById("img");
        currentImage.dataset.likes++;
        popularityScore.innerText = `Popularity Score: ${currentImage.dataset.likes}`;
    });

    downButton.addEventListener("click", () => {
        const popularityScore = document.getElementById("popularity");
        const currentImage = document.getElementById("img");
        currentImage.dataset.likes--;
        popularityScore.innerText = `Popularity Score: ${currentImage.dataset.likes}`;
    });
};
