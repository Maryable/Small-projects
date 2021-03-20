const items = document.querySelector('.items');
const input = document.querySelector('#type-area');
const addBtn = document.querySelector('.plus-btn');
const trash = document.querySelector('.trash-btn');

function onAdd() {

    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    //input에 있는 텍스트는 value라는 값을 통해서 받아올 수 있다.
    console.log(text);
    if( text === '') {
        input.focus();
        return;
    }

    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = createItem();
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 인풋을 초기화한다.
    input.value = '';
    input.focus();
}

function createItem (text) {
    // 전달받은 text 입력
    const itemList = document.createElement('li');
    itemList.setAttribute('class', 'todo-list');

    const item = document.createElement('div');
    itemList.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'list__name');
    name.innerText=text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','trash-btn');
    deleteBtn.innerHTML = '<img src="imgs/trash.svg" alt="delete button">';
    deleteBtn.addEventListener('click', ()=> {
        items.removeChild(itemList);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);
    itemList.appendChild(item);
    itemList.appendChild(itemDivider);
    return itemList;
}

addBtn.addEventListener('click', ()=> {
    onAdd();
});