import axios from "axios";

export default {
    // Saves User to the database
  saveUser: function(User) {
    return axios.post("/api/user", User);
  }
};
