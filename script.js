const now = new Date(); 
let DateTime = document.getElementById("DateTime");
DateTime.innerText = now.toLocaleString();

let myform = document.getElementById("myform");

myform.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let main = document.querySelector(".main");
    let task = document.getElementById("task").value;
    
    const taskKey = 'task_' + new Date().getTime();
    
    localStorage.setItem(taskKey, task);
    
    let taskList = document.createElement("div");
    taskList.setAttribute("class", "taskList w-[350px] min-h-[40px] rounded-[50px] mb-[15px] bg-[#2828287d] py-2 flex gap-2 pl-[25px] px-[20px] items-center");

    let output = document.createElement("span");
    output.setAttribute("class", "break-words text-white w-full max-w-[70%]");
    output.innerHTML = localStorage.getItem(taskKey);

    let btns = document.createElement("div");
    btns.setAttribute("class", "btns flex justify-end items-center gap-[9px] w-[30%]");

    let edit = document.createElement("button");
    edit.setAttribute("class", "edit w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[#6d6b6bce]");

    let pencil = document.createElement("iconify-icon");
    pencil.setAttribute("icon", "bxs:pencil");

    let delet = document.createElement("button");
    delet.setAttribute("class", "delete w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[#6d6b6bce]");

    let bin = document.createElement("iconify-icon");
    bin.setAttribute("icon", "solar:trash-bin-2-bold");


    edit.addEventListener('click', function() {

        let input =  document.createElement("input")
        input.setAttribute("type" , "text")
        input.setAttribute("placeholder" , "Edit the task")
        input.setAttribute("class", "w-full h-[35px] rounded-[17px] outline-none pl-[5px] bg-transparent text-[#9CA3AF]")
        taskList.replaceChild(input, output);


        let savebtn = document.createElement("button")
        savebtn.setAttribute("class" , "w-[35px] h-[35px] rounded-[50%]  bg-[#6d6b6bce] flex items-center justify-center")
        savebtn.setAttribute("type" , "submit")

        let saveicon = document.createElement("iconify-icon")
        saveicon.setAttribute("icon" , "ion:cloud-done")
        savebtn.appendChild(saveicon)

        btns.replaceChild(savebtn, edit);

        savebtn.addEventListener('click' , function() {
            let updatedTask = input.value

            if (updatedTask !== null && updatedTask !== "") {
                localStorage.setItem(taskKey , updatedTask)
            }
            taskList.replaceChild(output,input)
            output.innerHTML = localStorage.getItem(taskKey)
            btns.replaceChild(edit, savebtn);
        })
    });
    delet.addEventListener('click', function() {
        
        localStorage.removeItem(taskKey);
        taskList.remove(); 
    });


    main.appendChild(taskList);
    taskList.appendChild(output);
    taskList.appendChild(btns);
    btns.appendChild(edit);
    edit.appendChild(pencil);
    btns.appendChild(delet);
    delet.appendChild(bin);    
});
