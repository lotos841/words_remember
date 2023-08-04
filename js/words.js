
let wordPack = new Map();

function addWord(word, translate) {
    wordPack.set(word, translate);
}

function deleteWord(word) {
    localStorage.removeItem(word);
    get_word_from_localStorage()
    showWords();
}

function getWords(wordsPack) {
    for (const iterator of wordsPack.keys()) {
        console.log(iterator)
    }
}

function get_word_from_localStorage() {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        addWord(key, localStorage.getItem(key));
    }
}

function showWords() {
    word_links.innerHTML = '';
    get_word_from_localStorage()
    for (const iterator of wordPack.keys()) {
        let word = document.createElement('a')
        word.classList.add('word-link');
        word.href = '';
        word.id = String(iterator);
        word.textContent = String(iterator);
        word.addEventListener('click', e => {
            e.preventDefault();
            showWord(word.id)})
        word_links.appendChild(word)
    }
}

function showWord(word) {
    word_title.textContent = word 
    word_translate.textContent = wordPack.get(word);
}

let word_links = document.getElementById("word_links");

let word_title = document.getElementById("word_title");
let word_translate = document.getElementById("word_translate");

let add_new_word_link = document.getElementById("add_new_word_link")
let add_word_modal = document.getElementById("add_new_word_modal")
let span = document.getElementsByClassName("close")[0];

let add_word_title = document.getElementById("add_word_title");
let add_word_translate = document.getElementById("add_word_translate");
let add_new_word_button = document.getElementById("add_new_word_button");

let delete_word_button = document.getElementById("delete-word-button")
let chage_word_button = document.getElementById("change-word-button")
let word_change_modal = document.getElementById("word-change-modal")
let span2 = document.getElementsByClassName("close")[1];
let change_word_title = document.getElementById("change_word_title")
let change_word_translate = document.getElementById("change_word_translate")
let change_word_button_in_modal = document.getElementById('change-word-button-in-modal')

delete_word_button.addEventListener('click', e => {
    deleteWord(word_title.textContent)
})

chage_word_button.addEventListener('click', e => {
    word_change_modal.style.display = "block"; 
    change_word_title.value = word_title.textContent;
    change_word_translate.value = word_translate.textContent;
    e.preventDefault();
})

change_word_button_in_modal.onclick = function(e) {
    let old_word = word_title.textContent;
    changeWord(old_word,change_word_title.value, change_word_translate.value);
    word_change_modal.style.display = "none";
    location.reload()
}

function changeWord(old_word,word, translate) {
    
    if (old_word != word) {
        localStorage.removeItem(old_word)
    }

    localStorage.setItem(word, translate)
    word_title.textContent = word
    word_translate.textContent = translate;
    showWords()
}

add_new_word_link.onclick = function(e) {
    add_word_modal.style.display = "block";
    e.preventDefault();
  }
  
window.onclick = function(event) {
    if (event.target == add_word_modal) {
        add_word_modal.style.display = "none";
    }
    if (event.target == word_change_modal) {
        word_change_modal.style.display = "none";
    }
}

add_new_word_button.onclick = () => {
    addWord(add_word_title.value, add_word_translate.value);
    localStorage.setItem(add_word_title.value,add_word_translate.value)
    get_word_from_localStorage()
    showWords()
    add_word_title.value = "";
    add_word_translate.value = ""
    add_word_modal.style.display = "none";
}

get_word_from_localStorage()
showWords();
