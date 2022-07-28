function adduser()
{
    p1name = document.getElementById("p1n").value;
    localStorage.setItem("p1name",p1name);
    p2name = document.getElementById("p2n").value;
    localStorage.setItem("p2name",p2name);
    window.location = "game_page.html"
}