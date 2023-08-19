let lists = document.querySelectorAll('.list');
let rightBox = document.querySelector('#right');
let leftBox = document.querySelector('#left');

for(let i=0; i<lists.length; i++){
    
    lists[i].addEventListener('dragstart', function(e){
        let selected = e.target;
        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
            
        });
        rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function(e){
            leftBox.appendChild(selected);
            selected = null;
        })
    });
}
