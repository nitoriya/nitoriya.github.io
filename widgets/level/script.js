// const cards = {
//     kazuma: 'https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/cards/kazuma.png',
//     furina: 'https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/cards/furina.png',
// };
const cards = ["kazuma", "furina"];
const cards_path = "https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/cards/";

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);

    const username = urlParams.get('name') || "Попаданец";
    document.getElementById('name').innerText = username;

    const avatarUrl = urlParams.get('avatar') || "https://s1.zerochan.net/icons/avatar4.png";
    document.getElementById('avatar').src = avatarUrl;

    const bannerUrl = "https://raw.githubusercontent.com/nitoriya/nitoriya.github.io/main/media/cards/"
        + (cards.includes(urlParams.get('card')) ? urlParams.get('card') : cards[0]) + ".png";
    document.getElementById('card').style.backgroundImage = `url(${bannerUrl})`;

    const level1 = (urlParams.get('lvl1') || '0');
    document.getElementById('lvl1').innerText += level1;

    const level2 = (urlParams.get('lvl2') || '0');
    document.getElementById('lvl2').innerText += level2;

    const progress1 = /^\d+,\d+$/.test(urlParams.get('p1')) ? urlParams.get('p1').split(',').map(Number) : [0, 100];
    document.getElementById('p1').style.width = `${Math.max(progress1[0] / progress1[1] * 100, 5.5)}%`;
    document.getElementById('ratio1').innerText += ` ${progress1[0]}/${progress1[1]}`;

    const progress2 = /^\d+,\d+$/.test(urlParams.get('p2')) ? urlParams.get('p2').split(',').map(Number) : [0, 100];
    document.getElementById('p2').style.width = `${Math.max(progress2[0] / progress2[1] * 100, 5.5)}%`;
    document.getElementById('ratio2').innerText += ` ${progress2[0]}/${progress2[1]}`;

    const vc_time = /^\d+$/.test(urlParams.get('vc-time')) ? urlParams.get('vc-time') : 0;
    const d = vc_time / (60 * 60 * 24),
        h = vc_time % (60 * 60 * 24) / (60 * 60),
        m = vc_time % (60 * 60 * 24) % (60 * 60) / 60,
        s = vc_time % (60 * 60 * 24) % (60 * 60) % 60;
    document.getElementById('vc-time').innerText += (Math.floor(d / 10) + "" + Math.floor(d % 10)) +
        ":" + (Math.floor(h / 10) + "" + Math.floor(h % 10)) +
        ":" + (Math.floor(m / 10) + "" + Math.floor(m % 10)) +
        ":" + (Math.floor(s / 10) + "" + Math.floor(s % 10));
});