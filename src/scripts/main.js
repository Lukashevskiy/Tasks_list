document.addEventListener("DOMContentLoaded", on_create);

let block_changing_task;
let block_task_list;
let sample;
let mas_of_tasks = [];
let idd = 0;
let html_list;
let save_task_button;
let current_task_id;



class Task{
	// id;
	// is_complete;
	// is_hight_priority;
	// discription;
	// html_element;
	constructor(is_complete, is_hight_priority, discription, html_element_sample, id){
		this.id = id;
		this.is_complete = is_complete;
		this.is_hight_priority = is_hight_priority;
		this.html_element = document.createElement(html_element_sample.nodeName);
		this.html_element.innerHTML = html_element_sample.innerHTML;
		this.get_text_content().textContent = id;
	}

	add_to_document(DOM_structure){
		DOM_structure.append(this.html_element);
		let id = this.id;
		this.get_edit_button().addEventListener("click", function (){ 
																		change_task(id);
																		console.log('edit'+id); 
																	});
		this.get_delete_button().addEventListener('click', function (){ 
																		console.log('remove'+id); 
																		});
	}
	remove_from_document(){
		let id = this.id;
		if(this.html_element.parentElement !== null){
			this.html_element.parentElement.removeChild(this.html_element);
		}
		
	}

	get_edit_button(){
		return this.html_element.lastElementChild.firstElementChild;
	}

	get_delete_button(){
		return this.html_element.lastElementChild.lastElementChild;
	}

	get_text_content(){
		return this.html_element.firstElementChild.lastElementChild;
	}
}

function on_create() {
	block_changing_task = document.querySelector('.block__changing_tasks');
	block_task_list = document.querySelector('.block__display_tasks');
	html_list = block_task_list.lastElementChild;
	sample = html_list.firstElementChild;
	html_list.removeChild(sample);
	block_changing_task.classList.add('on_holding');

	block_task_list.firstElementChild.lastElementChild.firstElementChild.addEventListener('click', function(){change_task(-1)});
}

function change_task(id_task){
	current_task_id = id_task;
	block_changing_task.classList.remove('on_holding');
	block_changing_task.lastElementChild.firstElementChild.addEventListener('click', save_changing);
}

function save_changing() {
	if(current_task_id === -1){
		let task = new Task(false, false, '', sample, mas_of_tasks.length);
		task.add_to_document(html_list);
		mas_of_tasks.push(task);
	}else{
		mas_of_tasks[current_task_id].get_text_content.textContent = block_changing_task.children[1].lastElementChild.value;
	}
	block_changing_task.classList.add('on_holding');
}