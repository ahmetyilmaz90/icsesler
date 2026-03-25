// Category pills
document.querySelectorAll('.cat-pill').forEach(btn => {
btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
});
});

// Feed tabs
document.querySelectorAll('.feed-tab-btn').forEach(tab => {
tab.addEventListener('click', () => {
    document.querySelectorAll('.feed-tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
});
});

/*Site tarihini otomatik güncellemek için*/
document.querySelector(".site-date").innerHTML = new Date().getFullYear();