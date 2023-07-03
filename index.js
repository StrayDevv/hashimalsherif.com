function goToMainPage(fileName) {
    window.location.href = `${fileName}.html`;
}

function openRandomBlog() {
    var blogs = [
        "DebtandConsumerism.html",
        "FiveThingsEverySuccessfulPersonShouldHave.html"
    ];
    var randomIndex = Math.floor(Math.random() * blogs.length);
    var randomBlog = blogs[randomIndex];
    window.location.href = randomBlog;
}

function shuffleList() {
    var list = document.querySelector(".class-text");
    var items = Array.from(list.getElementsByTagName("li"));
  
    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        list.insertBefore(items[j], items[i]);
    }
}

window.addEventListener("DOMContentLoaded", function() {
    shuffleList();
});
