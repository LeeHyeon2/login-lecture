"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    pw_check = document.querySelector("#pw_check"),
    registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
    if (!id.value) {
        return alert("아이디를 입력하시오")
    }
    if (password.value !== pw_check.value) {
        return alert("비밀번호 일치 x")
    }
    const req = {
        id: id.value,
        password: password.value,
        name: name.value,
    }

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => (res.json()))
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"))
        })
}
