const createNotes = async () => {

    const notesTxt = document.getElementById('note-text').value;
    const authorTxt = document.getElementById('author-text').value;

    try {
        const response = await axios({
            url: "http://localhost:4300/",
            method: "POST",
            data: {
                notes: notesTxt,
                author: authorTxt,
            },
        });

        if (response.data === true) {
            alert("Notes SAVED Successfully!");
        } else {
            alert("Something went wrong!");
        }
    } catch (error) {
        console.error("Error during request:", error); 
        alert("Failed to save the note. Please try again.");
    }
};
