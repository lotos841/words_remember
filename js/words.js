
let wordPack = new Map();

function addWord(word, translate) {
    wordPack.set(word, translate);
}

function getWords(wordsPack) {
    for (const iterator of wordsPack.keys()) {
    }
}

getWords(wordPack);


let word_links = document.getElementById("word_links");



let word_title = document.getElementById("word_title");
let word_translate = document.getElementById("word_translate");

function showWords() {
    word_links.innerHTML = '';
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

showWords();

function showWord(word) {
    word_title.textContent = word 
    word_translate.textContent = wordPack.get(word);
}


let add_new_word_link = document.getElementById("add_new_word_link")
let add_word_modal = document.getElementById("add_new_word_modal")
var span = document.getElementsByClassName("close")[0];

add_new_word_link.onclick = function(e) {
    add_word_modal.style.display = "block";
    e.preventDefault();
  }
  
  span.onclick = function() {
    add_word_modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == add_word_modal) {
        add_word_modal.style.display = "none";
    }
  }


let add_word_title = document.getElementById("add_word_title");
let add_word_translate = document.getElementById("add_word_translate");
let add_new_word_button = document.getElementById("add_new_word_button");


add_new_word_button.onclick = () => {
    addWord(add_word_title.value, add_word_translate.value);
    localStorage.setItem(add_word_title.value,add_word_translate.value)
    showWords()
    add_word_title.value = "";
    add_word_translate.value = ""
    add_word_modal.style.display = "none";
}
console.log(localStorage.getItem('Rule'))
