function showMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

document.addEventListener('mousemove', (e) => {
    const body = document.body;
    const { clientX: mouseX, clientY: mouseY } = e;
    const { clientWidth: width, clientHeight: height } = body;
    const xPercent = (mouseX / width) * 100;
    const yPercent = (mouseY / height) * 100;
    body.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

function showImage(src) {
    const img = document.getElementById('item-image');
    img.src = src;
    img.style.display = 'block';
}

function hideImage() {
    const img = document.getElementById('item-image');
    img.style.display = 'none';
}
