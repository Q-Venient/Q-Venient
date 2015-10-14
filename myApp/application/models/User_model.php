<?php

defined('BASEPATH') OR exit('No direct script access allowed');


class User_model extends CI_Model {

	public function get_records(){
		return $this->db->get('user_registered')->result_object();
	}

	public function record_get($id){
		return $this->db->get('user_registered', $id)->result_object();
	}

	public function insert($data){
		$this->db->insert('user_registered',$data);
		return $this->db->insert_id();
	}
	
	public function update($data, $id){
		return $this->db->where('id',$id)->update('user_registered',$data);
	}

	public function delete($id){
		return $this->db->where('id',$id)->delete('user_registered');
	}
}