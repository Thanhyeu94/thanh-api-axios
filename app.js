// đây là 1 con api mk lấy vào để gọi dữ liệu ra
const BASE_URL='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
const getListMealItems = async()=>{
    try {
        const response= await axios.get(`${BASE_URL}`);
        const mealItems = response.data;
        showMeals(mealItems);
        return mealItems;
    } catch (error) {
        
    }
}
function showMeals(mealItems){
    let tab= 
    `<thead class="thead-light">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    `;
    for(let meals of mealItems.meals){
    tab += `<tbody>
            <tr>
            <td> 
                <div style="width: 300px; height: 200px;">
                    <img style="width: 100%; height: 100%;object-fit: cover;border-radius: 10px;" src="${meals.strMealThumb}" alt="">    
                </div>
            </td>
            <td>${meals.strMeal}</td>
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
            </tr>
            </tbody>`;
    }
    document.getElementById("table").innerHTML=tab;
}
getListMealItems()

// const form = document.querySelector('form');

// form.addEventListener('submit', async event => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Max-Age", 2592000); 
//   event.preventDefault();
//   const imageUrlInput = document.querySelector('#imageUrlInput').value;
//   const imageNameInput = document.querySelector('#imageNameInput').value;
//   // console.log("ảnh",imageUrlInput);
//   // console.log("tên ảnh",imageNameInput);
//   const todoMeal = {
//     strMealThumb: imageUrlInput,

//     strMeal: imageNameInput

//   };
//   const submitTodoItem = await addTodoItem(todoMeal);
//   showMeals(submitTodoItem);

// });
// const addTodoItem = async todoMeal => {
//     try {
//       const response = await axios.post(`${BASE_URL}`,todoMeal);
//       const newTodoItem = response.data;
//       console.log("thêm mới món ăn:",newTodoItem);
//       return newTodoItem;
//     } catch (errors) {
//       console.error(errors);
//     }
//   };


  