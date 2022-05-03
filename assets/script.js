let url = 'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true';
let output = {};
fetch(url)
    .then(res => res.json())
    .then((out) => {
        showCard(out);
}).catch(err => console.error(err));

showCard = (out) => {
    const cardDiv = document.querySelector('.cards');
    out.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<div class="cardlogo">
        ${item.fname[0]}${item.lname[0]}
    </div>
    <div class="fname">${item.fname}</div>
    <div class="lname">${item.lname}</div>
    <spam class="category ${item.category}">${item.category}</div>`;
        cardDiv.appendChild(cardElement);
    })
}

let category1 = document.getElementById('category1');
let category2 = document.getElementById('category2');
let category3 = document.getElementById('category3');

category1.addEventListener('click', () => {
    if('active' in category1.classList){
        category1.classList.remove('active');
        let hideCategory1 = document.getElementsByClassName('category1');
        for(let i = 0; i < hideCategory1.length; i++){
            hideCategory1[i].style.display = 'none';
        }
    }
    else{
        category1.classList.add('active');
        let showCategory1 = document.getElementsByClassName('category1');
        for(let i = 0; i < showCategory1.length; i++){
            showCategory1[i].style.display = 'auto';
        }
    }
});


category2.addEventListener('click', () => {
    if('active' in category2.classList){
        category2.classList.remove('active');
        let hideCategory2 = document.getElementsByClassName('category2');
        for(let i = 0; i < hideCategory2.length; i++){
            hideCategory2[i].style.display = 'none';
        }
    }
    else{
        category2.classList.add('active');
        let showCategory2 = document.getElementsByClassName('category2');
        for(let i = 0; i < showCategory2.length; i++){
            showCategory2[i].style.display = 'auto';
        }
    }
});
category3.addEventListener('click', () => {
    if('active' in category3.classList){
        category3.classList.remove('active');
        let hideCategory3 = document.getElementsByClassName('category3');
        for(let i = 0; i < hideCategory3.length; i++){
            hideCategory3[i].style.display = 'none';
        }
    }
    else{
        category3.classList.add('active');
        let showCategory3 = document.getElementsByClassName('category3');
        for(let i = 0; i < showCategory3.length; i++){
            showCategory3[i].style.display = 'auto';
        }
    }
});

