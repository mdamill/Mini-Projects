
const fetchNotes = async () => {

    const response = await axios({
        url:"http://localhost:4300/",
        method : "GET",
    });

    const notesList = response.data; 

    const notesListTag = document.getElementById('view-notes-list');

    for (let i = 0; i < notesList.length; i++) {
        const tag = `
        <li class="view-notes-block">
                <div>${notesList[i].notes}</div>
                <br>
                <div class="view-notes">${notesList[i].author}</div>
        </li>
        `
        notesListTag.innerHTML += tag;
    }

};

fetchNotes();