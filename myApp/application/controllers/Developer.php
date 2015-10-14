<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Developer extends REST_Controller {

	public function index_get(){ //read 
		$this->load->model('Developer_model','developer');
		$data  = $this->developer->get_records();
		$this->response($data, 200); 
	}

	public function index_post(){ //create
		$post_data = $this->post();
		$this->load->model('Developer_model','developer');
		$id = $this->developer->insert($post_data);
		$this->response(array('id' => $id), 200); 
	}

	public function index_put(){
		$id = (int) $this->get('id'); //get the id from Developer/3 where 3 is the ex id
		$data = $this->put();
		$this->load->model('Developer_model','developer');
		$id = $this->developer->update($data, $id);
		$this->response(array('ok' => 'Success'), 200); 
	}

	public function index_delete(){
		$id = (int) $this->get('id'); //get the id from Developer/3 where 3 is the ex id
		$this->load->model('Developer_model','developer');
		$id = $this->developer->delete($id);
		$this->response(array('ok' => 'Success'), 200); 
	}

	public function index_options(){
		die();
	}
	
}