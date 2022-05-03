let url = 'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true';
let output = {};
fetch(url)
    .then(res => res.json())
    .then((out) => {
        
}).catch(err => console.error(err));
