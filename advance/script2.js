let mydata = JSON.parse(cars);
console.log(mydata);

function largeItem() {
    this.classList.toggle('col-12');
    this.style.transition = "1s";
    this.classList.toggle('order');
    
    var show = this.getElementsByClassName("hidden");
    for (let i = 0; i < show.length; i++) {
        show[i].classList.toggle('show');
    }

    var image = this.getElementsByClassName("image");
    for (let i = 0; i < image.length; i++) {
        image[i].classList.toggle('imagelarge');
    }
}

for (let i = 0; i < mydata.length; i++) {

    document.getElementById('row').innerHTML += `
        <div class="col col-4 mb-5">
            <div class="box">
                <div class="image">
                    <img src="${mydata[i].image}" alt="">
                </div>
                <div class="title h5 px-3 mt-2 text-center">${mydata[i].name}</div>
                <div class="price px-3 mt-3 mb-2 fs-6 hidden">${mydata[i].description}</div>
                <div class="price px-3 mt-2 mb-2 fs-6 hidden">Year ${mydata[i].year}</div>
                <div class="price px-3 mt-2 mb-4 text-center fw-bold fs-5">${mydata[i].price}</div>
                <div class="price px-3 mt-3 mb-4 text-center fs-7">More details</div>
            </div>
        </div>   
    `;
}


var items = document.getElementsByClassName("col");
//console.log(items);

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', largeItem, false);
}


