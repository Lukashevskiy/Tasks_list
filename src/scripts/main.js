
let block_changing_task;
let block_task_list;
let sample;
let mas_of_tasks = [];

task_list = [ 
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"}, 
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':false, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete':true, 'is_priority': false, 'discription': "dont do anyting"}
]


class Task{
	is_complete;
	is_hight_priority;
	discription;
	html_element;
	constructor(is_complete, is_hight_priority, discription, html_element_sample){
		this.is_complete = is_complete;
		this.is_hight_priority = is_hight_priority;
		this.html_element = document.createElement(html_element_sample.nodeName);
		this.html_element.innerHTML = html_element_sample.innerHTML;
	}

	add_to_document(DOM_structure){
		DOM_structure.append(this.html_element);
		this.html_element.children[1].firstElementChild.addEventListener('click', function(){ mod_of_changing_menu('edit'); });
	}

}

function save_changing_in_tasklist(id_task) {
	if(id_task = mas_of_tasks.length){
		new_task = new Task(false, block_changing_task.children[2].firstElementChild.checked,block_changing_task.children[1].lastElementChild.value, sample);
		mas_of_tasks.push(new_task);
	}else{
		mas_of_tasks[id_task].html_element.children[0].lastElementChild.textContent = block_changing_task.children[1].lastElementChild.value;
	}
	update_tasks();
	block_changing_task.classList.add('on_holding');
}

function mod_of_changing_menu(mod, id_task){
	if(mod === 'edit'){
		block_changing_task.classList.remove('on_holding');
		block_changing_task.children[3].firstElementChild.addEventListener('click', function() { save_changing_in_tasklist(id_task) });
		block_changing_task.children[3].lastElementChild.addEventListener('click', function() { cancel_changing_in_tasklist(id_task) });
	}else if(mod === 'close'){
		block_changing_task.classList.add('on_holding');
		block_changing_task.children[3].firstElementChild.removeEventListener('click', function() { save_changing_in_tasklist(id_task) });
		block_changing_task.children[3].lastElementChild.removeEventListener('click', function() { cancel_changing_in_tasklist(id_task) });
	}else if(mod == 'new'){
		block_changing_task.classList.remove('on_holding');
		block_changing_task.children[3].firstElementChild.addEventListener('click', function() { save_changing_in_tasklist(id_task) });
		block_changing_task.children[3].lastElementChild.addEventListener('click', function() { cancel_changing_in_tasklist(id_task) });
	}
}

function on_create() {
	block_task_list = document.querySelector(".block__display_tasks");
	block_changing_task = document.querySelector(".block__changing_tasks");
	sample = block_task_list.children[1];
	
	block_task_list.removeChild(sample);


	for(let i = 0; i < task_list.length; i++){
		new_task = new Task(task_list['is_complete'], task_list['is_priority'], task_list['discription'], sample); 
		mas_of_tasks.push(new_task);
	}
	//console.log(mas_of_tasks.length);

	block_task_list.children[0].children[1].firstElementChild.addEventListener('click', function(){ mod_of_changing_menu('new', mas_of_tasks.length)});

	mod_of_changing_menu('close');
	update_tasks();

}

function update_tasks() {
	for(let i = 1; i < block_task_list.children.length; i++){
		//block_task_list.children[i].lastElementChild.firstElementChild.removeEventListener('click', function() { mod_of_changing_menu('edit', i); });
		//block_task_list.children[i].lastElementChild.lastElementChild.removeEventListener('click', function() { delete_from_task_list(i); });
		block_task_list.children[i].children[1].firstElementChild.addEventListener('click', function(){ mod_of_changing_menu('edit');}); 
		block_task_list.removeChild(block_task_list.children[i]);
	}
	for(let i = 0; i < mas_of_tasks.length; i++){
		mas_of_tasks[i].add_to_document(block_task_list);

		//console.log(mas_of_tasks[i].html_element);
	}
	console.log(mas_of_tasks.length);
}


document.addEventListener("DOMContentLoaded", on_create);
