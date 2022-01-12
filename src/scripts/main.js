
let block_changing_task;
let block_task_list;
let sample;
task_list = [ 
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"}, 
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"}
]


function on_create() {
	block_task_list = document.querySelector(".block__display_tasks");
	sample = block_task_list.children[1];
	block_task_list.removeChild(sample);
	for(let i = 0; i < task_list.length; i++){
		let new_task = document.createElement('li');
		if(i % 2 == 0){
			new_task.classList.add(sample.classList);
		}
		new_task.innerHTML = sample.innerHTML;
		block_task_list.append(new_task);
		//new_task.children[1].children[1].addEventListener('click', on_click_delete(new_task));
		//new_task.children[1].children[0].addEventListener('click', on_click_save(new_task));
	}
	//on_start();
}


function on_click_delete(element){
	element.parentNode.removeChild(element);

}

function on_click_save(element){
	
}

function on_start() {







	block_changing_task = document.querySelector(".block__changing_tasks");
	block_changing_task.classList.add("on_holding");
	let element = document.querySelector(".button_in_changin_task_block");
	console.log(element);

	element.addEventListener("click", function(){ on_changing(false); });

	block_changing_task.children[3].children[0].addEventListener('click', function(){ on_changing(true); });
	
}

document.addEventListener("DOMContentLoaded", on_create);


function on_changing(close) {
	if(close){
		block_changing_task.classList.add("on_holding");	
	}else{
		block_changing_task.classList.remove("on_holding");
	}
}