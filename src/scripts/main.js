
let block_changing_task;
let block_task_list;

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