let checked = document.getElementById('checked');
let image1 = document.getElementById('image1');
let image = document.getElementById('image');

checked.onclick = () => {
    function check() {
        if (checked.style.left == 0) {
            checked.style.left = '55px';
            image1.src = 'on.jpg';
            image.src = 'on.jpg';
            checked.style.boxShadow = '0 0 5px 5px yellow';
        }else if (checked.style.left == '55px') {
            checked.style.left = '5px';
            image1.src = 'of.jpg';
            image.src = 'of.jpg';
            checked.style.boxShadow = '0 0 5px 5px black';
        } else if (checked.style.left == '5px') {
            checked.style.left = '55px';
            image1.src = 'on.jpg';
            image.src = 'on.jpg';
            checked.style.boxShadow = '0 0 5px 5px yellow';
        }
        return 0;
    }
    check();
}