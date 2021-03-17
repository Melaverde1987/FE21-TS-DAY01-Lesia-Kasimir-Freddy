let dishes : Array<{id:number, name:string, image:string, price:number, description:string}> = Array(
      {"id" : 1,
      "name": "Land Rover <span class='badge bg-my'>New</span>",
      "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 10,
      "description": "In congue. Etiam justo. Etiam pretium iaculis justo."
    }, {
      "id" : 2,
      "name": "Chrysler",
      "image": "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 15,
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      "id" : 3,
      "name": "Subaru",
      "image": "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 6,
      "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
    },
    {
      "id" : 4,
     "name": "Cadillac",
      "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 8,
      "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.<br>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
      "id" : 5,
     "name": "Cadillac <span class='badge bg-my'>New</span> ",
      "image": "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 9,
      "description": "Fusce consequat. Nulla nisl. Nunc nisl.<br>Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. <br>In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
      "id" : 6,
     "name": "Mazda",
      "image": "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 3,
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.<br>Phasellus in felis. Donec semper sapien a libero. Nam dui."
    }
    );


console.log(dishes);

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
for (let i = 0; i < dishes.length; i++) {
    document.getElementById('row').innerHTML += `
        <div class="col col-4 mb-5">
            <div class="box">
                <div class="image">
                    <img src="${dishes[i].image}" alt="">
                </div>
                <div class="title h5 px-3 mt-2 text-center">${dishes[i].name}</div>
                <div class="price px-3 mt-3 mb-2 fs-6 hidden">${dishes[i].description}</div>
                <div class="price px-3 mt-2 mb-4 text-center fw-bold fs-5">${dishes[i].price}</div>
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