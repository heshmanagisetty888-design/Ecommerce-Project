
const buyNow = document.querySelector('.buynow');
const delivery = document.getElementsByClassName('delivery')[0];
const loadingText = document.getElementsByClassName('loading-text')[0];

buyNow.addEventListener('click', ()=> {
    // alert("function called");
    delivery.classList.add('active');
     var percentage = 0;
    loadingText.innerHTML = `${percentage}%`;
    var interval = setInterval(()=> {
        percentage += 1;
        loadingText.innerHTML = `${percentage}%`;
        if( percentage >= 100 ) {
            clearInterval(interval);
            // loadingText.innerHTML = `Delivered !`;
            window.location.href = "products.html";
        }
    }, 100);
       

});