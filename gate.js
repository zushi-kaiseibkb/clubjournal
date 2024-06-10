function checkPassword() {
    const correctPassword = "2718"; /*この2718を変えたらパスワードが変わります ログイン時に半角数字4桁と書いているので、できれば半角数字4桁にしてほしいです*/
    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        window.location.href = "HP/HP.html";
    } else {
        errorMessage.textContent = "パスワードが違います";
    }
}
