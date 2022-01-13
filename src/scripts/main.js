
let block_changing_task;
let block_task_list;
let sample;
let mas_of_tasks = [];
let idd = 0;
let html_list;
task_list = [
	{'is_complete': true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete': true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete': false, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete': true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete': true, 'is_priority': false, 'discription': "dont do anyting"},
	{'is_complete': true, 'is_priority': false, 'discription': "dont do anyting"}
]


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
		this.get_edit_button().addEventListener("click", function () { console.log('edit'+id); });
		this.get_delete_button().addEventListener('click', function () { console.log('remove'+id); });
	}
	remove_from_document(){
		let id = this.id;
		this.html_element.parentElement.removeChild(this.html_element);
		this.get_edit_button().removeEventListener("click", function () { console.log('edit'+id);  });
		this.get_delete_button().removeEventListener('click', function () { console.log('remove'+id); });
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

function init_blocks() {
	block_changing_task = document.querySelector('.block__changing_tasks');
	block_task_list = document.querySelector('.block__display_tasks');
	html_list = block_task_list.lastElementChild;
	sample = html_list.firstElementChild;
	html_list.removeChild(sample);
}

function add_task_to_mas(content){
	console.log(-1010101010);
	let new_task = new Task(
	content['is_complete'],
	content['is_priority'],
	content['discription'],
	sample,
	idd);
	mas_of_tasks.push(new_task);
	idd++;
}

function update_display_list(){
	block_task_list = document.querySelector('.block__display_tasks');
	for (var i = 0; i < mas_of_tasks.length; i++) {
		if(mas_of_tasks[i].html_element.parentElement !== null){
			mas_of_tasks[i].remove_from_document();
			console.log("f");
		}
	}
	for (var i = 0; i < mas_of_tasks.length; i++) {
		mas_of_tasks[i].add_to_document(html_list);
		console.log('a');
	}
}

function on_create() {
	init_blocks();

	for (var i = 0; i < task_list.length; i++) {
		add_task_to_mas(task_list[i]);
	}

	update_display_list();

	on_start();
}

function on_start() {
	let new_task_button = block_task_list.firstElementChild.lastElementChild.firstElementChild;
	new_task_button.addEventListener('click', function(){start_new_task();});
	block_changing_task.classList.add('on_holding');
}

function start_new_task(){
	set_event_listener_to_new_task_button(-1);
	block_changing_task.classList.remove('on_holding');
}

function set_event_listener_to_new_task_button(id_task){
	let save_task_button = block_changing_task.lastElementChild.firstElementChild;
	save_task_button.removeEventListener('click', function() { on_click_save_changing_in_task_list(id_task)} );
	save_task_button.addEventListener('click', function() { on_click_save_changing_in_task_list(id_task) });
}

function on_click_save_changing_in_task_list(id_task){

	console.log('\\\\\\\\\\\\\\\\\\\\');
	if(id_task === -1){
		content_of_new_task = {
		'is_complete': false,
		'is_priority': block_changing_task.children[2].firstElementChild.checked,
		'discription': block_changing_task.children[1].lastElementChild.value}
		add_task_to_mas(content_of_new_task);
		clear_fields_of_changing_task_block();
	}else{
		mas_of_tasks[i].get_text_content = block_changing_task.children[1].lastElementChild.value
	}
	block_changing_task.classList.add('on_holding');
	update_display_list();
}

function clear_fields_of_changing_task_block(){
	block_changing_task.children[2].firstElementChild.checked = false;
	block_changing_task.children[1].lastElementChild.value = '';
}
document.addEventListener("DOMContentLoaded", on_create);
