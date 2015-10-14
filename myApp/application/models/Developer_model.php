<?php

defined('BASEPATH') OR exit('No direct script access allowed');


class Developer_model extends CI_Model {

	public function get_records(){
		return $this->db->get('developer')->result_object();
	}

	public function insert($data){
		$this->db->insert('developer',$data);
		return $this->db->insert_id();
	}
	
	public function update($data, $id){
		return $this->db->where('id',$id)->update('developer',$data);
	}

	public function delete($id){
		return $this->db->where('id',$id)->delete('developer');
	}
}