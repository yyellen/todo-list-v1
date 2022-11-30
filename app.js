const createButton = document.querySelector(".create-button");
const input = document.querySelector(".todo-input");
const itemContainer = document.querySelector(".item-container");
const totalCount = document.querySelectorAll(".total-count");
const completedCount = document.querySelector(".completed-count");

const todoItems = [];

const createTodoItem = () => {
  // 拿到輸入框裡的值
  const inputValue = input.value;
  // 透過 createTodoItemData 產生 todo item 物件
  const todoItem = createTodoItemData(inputValue);

  // 拿到 todo item 物件後，放進 todoItems 陣列中
  todoItems.push(todoItem);
  // console.log(todoItems);

  // 更新 total count
  updateTotalCount();

  // 清空輸入框
  clearInput();

  // 把所有 todo items 顯示在畫面上
  renderTodoItems();
};

const generateTodoItem = (text, deleteIndex, editIndex) => {
  const container = document.createElement("div");
  container.classList.add("todo-item-container");

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("todo-text-container");
  const itemText = document.createTextNode(text);

  itemContainer.appendChild(itemText);

  // 新增 delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  const deleteButtonText = document.createTextNode("×");
  deleteButton.appendChild(deleteButtonText);

  deleteButton.addEventListener("click", function() {
    // delete button 要做的事情
    // alert(`確定要刪除${text}? 此動作無法恢復`)
    // console.log("delete todo item", deleteIndex);
    todoItems.splice(deleteIndex, 1);
    // console.log(todoItems);
    renderTodoItems();
    updateTotalCount();
    updateCompletedCount();
  });

  // 新增 checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("change", function() {
    // checkbox 要做的事情
    itemContainer.classList.toggle("text-completed");
    updateCompletedCount();
  });

  // 新增 edit button
  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  const editButtonText = document.createTextNode("✎");
  editButton.appendChild(editButtonText);

  editButton.addEventListener("click", function() {
    // edit button 要做的事
    console.log("edit", editIndex, text);
    // 新增 input
    // 代入 text
    // 編輯按鈕消失
    // 新增確認按鈕
    // 取代 text
    // 重新渲染
    // input, 確認按鈕, 取消按鈕 消失 & 編輯按鈕回來
    // 新增取消按鈕
    // 取消
    // input, 確認按鈕, 取消按鈕 消失 & 編輯按鈕回來
  });

  container.appendChild(checkbox);
  container.appendChild(itemContainer);
  container.appendChild(editButton);
  container.appendChild(deleteButton);

  return container;
};

const createTodoItemData = (text) => {
  const data = {
    text: text,
  };

  return data;
};

const renderTodoItems = () => {
  // 每一次渲染時先清空 item container
  clearTodoItems();
  for (let i = 0; i < todoItems.length; i++) {
    const todoItem = todoItems[i];
    // console.log(todoItem);
    // const text = todoItem.text; // 取出物件的值
    const { text } = todoItem; // destructing 取出物件的值
    // console.log(text);

    const todoItemElement = generateTodoItem(text, i, i);
    // console.log(todoItemElement);

    itemContainer.appendChild(todoItemElement);
  }
};

const clearTodoItems = () => {
  itemContainer.innerHTML = "";
};

const clearInput = () => {
  input.value = "";
};

const updateTotalCount = () => {
  totalCount[0].innerHTML = totalCount[1].innerHTML = todoItems.length;
};

const updateCompletedCount = () => {
  const checkedCount = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  completedCount.innerHTML = checkedCount.length;
  // console.log(checkedCount.length);
};

createButton.addEventListener("click", createTodoItem);
