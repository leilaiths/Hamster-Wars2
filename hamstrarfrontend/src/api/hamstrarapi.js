import Api from "./Api";


class PostsApi {
  getAllhamsters() {
    return Api.get("/");
  }

  gethamstersById(id) {
    return Api.get("/" + id);
  }

  deletehamsterById(id){
	  return Api.delete("/" + id)
  }

  randomhamsterById(){
	return Api.get("/random")
}
postNewHamster(){
	return Api.post("/hamsters")
}
}

export default new PostsApi();