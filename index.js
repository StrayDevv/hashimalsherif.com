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
