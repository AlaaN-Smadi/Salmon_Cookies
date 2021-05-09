'use strict'

let sectionComment = document.getElementById('comment');
let submitA = document.getElementById('postComment');

submitA.addEventListener('click', postIt);

function postIt(event){
    event.preventDefault();
    let commentDiv = document.createElement('div');
    commentDiv.id = 'commentSection';

    sectionComment.appendChild(commentDiv);


    let image = document.createElement('img');
    let textPosted = document.createElement('h4');

    textPosted.id='textPosted';
    image.src= 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png';
    image.id = 'imageCommentId';
    
    

    let as = document.getElementById('inputComment');
    // console.log(as.value);
    textPosted.textContent=as.value;

    if(as.value == '' || as.value == " "){
alert("please enter a text to post it");
    }else{
        commentDiv.appendChild(image);

        commentDiv.appendChild(textPosted);
    }

    
}