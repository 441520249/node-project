$(() => {
    let signIn = $("#signIn");
    let register = function(inputEmail, inputPassword) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://localhost:3000/api/zeng",
                data: {
                    inputEmail,
                    inputPassword
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }
    console.log(signIn)
    signIn.click(async() => {
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        let data = await register(inputEmail, inputPassword);
        if (data === 'success') {
            console.log('注册成功');
            // location.href = "../dashboard.html"
            alert("注册成功")
        } else {
            console.log('注册失败');
        }
    })

    // let inputEmail = $("#inputEmail")
    // inputEmail.blur(function() {
    //     console.log(666)
    //     $.ajax({
    //         type: "get",
    //         url: "http://localhost:3000/api/zhao",
    //         data: {
    //             inputEmail
    //         },
    //         success(data) {
    //             console.log(data)
    //         }
    //     })
    // })

    // delBtn.click(
    //     //1.获取 当前Id 
    //     //2.ajax 要求后端删表
    //     $.ajax({
    //         type: "get",
    //         url: "http://localhost:3000/api/delgoodslist",
    //         data: {
    //             id: 1
    //         },
    //     })
    // }))

    let login = $("#login");
    let denglu = function(inputEmail, inputPassword) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "post",
                url: "http://localhost:3000/api/findUser",
                data: {
                    inputEmail,
                    inputPassword
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }
    login.click(async() => {
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        let data = await denglu(inputEmail, inputPassword);
        if (data === '0') {
            console.log('登录失败');
            alert("登录失败")
        } else {
            console.log('登录成功');
            alert("登录成功")
            console.log(data)

            localStorage.setItem("nam", data);
            location.href = "../dashboard.html";
            // sessionStorage.setItem("nam", data);
        }
    })

    let value = localStorage.getItem("nam")
    console.log(value)
    $.ajax({
        type: "post",
        url: "http://localhost:3000/api/text",
        data: {
            value
        },
        success(a) {
            if (a === true) {
                location.href = "../dashboard.html"
            }
        }
    })

    //localStorage一直保存，主题颜色，白天模式或者夜间模式，token
    // 增加 更新    localStorage.setItem(key,value);
    // 查          let value = localStorage.getItem(key);
    // 删          localStorage.removeItem(key);
    // 全部清除     localStorage.clear();


    //sessionStorage网页如果关闭的话，就清除，页面缓存的数据
    // 增加 更新    sessionStorage.setItem(key,value);
    // 查           let value = sessionStorage.getItem(key);
    //删             sessionStorage.removeItem(key);
    // 全部清除     sessionStorage.clear();



})