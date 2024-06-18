const cards = {
    kazuma: 'https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/kazuma.png',
    furina: 'https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/Furina.full.4005375.png',
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);

    const username = urlParams.get('name') || "Попаданец";
    document.getElementById('name').innerText = username;

    const avatarUrl = urlParams.get('avatar') || "https://s1.zerochan.net/icons/avatar4.png";
    document.getElementById('avatar').src = avatarUrl;

    const bannerUrl = cards[urlParams.get('card')] || cards.kazuma;
    document.getElementById('card').style.backgroundImage = `url(${bannerUrl})`;

    const level = parseInt(urlParams.get('lvl') || '0');
    document.getElementById('lvl').innerText = "LVL"+level;

    const progress1 = /^\d+,\d+$/.test(urlParams.get('p1')) ? urlParams.get('p1').split(',').map(Number) : [0, 100];
    document.getElementById('p1').style.width = `${Math.max(progress1[0] / progress1[1] * 100, 6)}%`;

    const progress2 = /^\d+,\d+$/.test(urlParams.get('p2')) ? urlParams.get('p2').split(',').map(Number) : [0, 100];
    document.getElementById('p2').style.width = `${Math.max(progress2[0] / progress2[1] * 100, 6)}%`;

});