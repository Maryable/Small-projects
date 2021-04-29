const items = document.querySelector('.lists'); // ul 태그 
const addBtn = document.querySelector('.plus-btn');
const input = document.querySelector('#type-area');

function onAdd() {
  // 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  // console.log(text);
  if(text ==='') {
    alert('There is nothing to add? 🤷‍♀️');
    input.focus();
    return;
  }

  // 새로운 아이템 만들기 ==텍스트, 삭제버튼
  const item = createItem(text);
  // 아이템즈 컨테이너 안에 새로 만든 아이템 추가
  items.appendChild(item);
  // 스크롤링 상태에서 새로운 아이템이 보여지도록
  item.scrollIntoView({ block:'center'});
  //인풋 초기화 
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'todo-name');
  name.innerText = text;

  const delBtn = document.createElement('button');
  delBtn.setAttribute('class', 'trash-btn');
  delBtn.innerHTML = '<img src="imgs/trash.svg" alt="delete list">';

  delBtn.addEventListener('click', ()=>{
    items.removeChild(itemRow);
    // ul의 li 한 줄을 지운다.
  });

  item.appendChild(name);
  item.appendChild(delBtn);
  itemRow.appendChild(item);
  return itemRow;
}

addBtn.addEventListener('click', ()=>{
  onAdd();
});

input.addEventListener('keypress', event =>{
  // 엔터키로 리스트 추가
  if(event.key ==='Enter') {
    onAdd();
  }
});