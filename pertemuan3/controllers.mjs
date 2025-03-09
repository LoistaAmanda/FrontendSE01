//kode perintah /controller
import users from "./data.mjs";

const index = () => {
  users.forEach(function (user) {
    console.log(user);
  });
};

export default index;