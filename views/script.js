const signBtn = document.getElementById("sign");
const loginBtn = document.getElementById("login");

signBtn.onclick = async () => {
  window.location.href = "../views/signup.html";
};

loginBtn.onclick = async () => {
  window.location.href = "../views/login.html";
};

async function signUp(event) {
  try {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const obj = {
      username,
      email,
      password,
    };

    if (username && email && password) {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        obj
      );
      console.log(response);
      if (response.status === 200) {
        window.location.href = "../views/login.html";
      } else {
        // throw new Error("Failed to Login");
        console.log("failed");
      }
    }
  } catch (err) {
    // document.body.innerHTML = `<div style ="color:red> ${err}</div>`;
    console.log(err);
  }
}
