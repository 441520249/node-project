$(() => {
    let sign = $("#sign");
    let jia = function(name, age, address, city, tip) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://localhost:3000/setting/zeng",
                data: {
                    name,
                    age,
                    address,
                    city,
                    tip
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }
    sign.click(async() => {
        let name = $("#name").val();
        let age = $("#age").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let tip = $("#tip").val();
        let data = await jia(name, age, address, city, tip);
        if (data === 'success') {
            console.log('加入成功');
            location.href = "../dashboard.html"
        } else {
            console.log('加入失败');
        }
    })

    // let name = $("#name");
    // name.blur(function() {
    //     console.log(666)
    //     $.ajax({
    //         type: "get",
    //         url: "http://localhost:3000/u/zhao",
    //         data: {
    //             name
    //         },
    //         success(data) {
    //             console.log(data)
    //         }
    //     })
    // });

    var fileNode = document.getElementById("file");
    fileNode.onchange = function() {
        // console.log(fileNode.files)
        var xmlhttp = new XMLHttpRequest();
        //设置回调，当请求的状态发生变化时，就会被调用  
        xmlhttp.onreadystatechange = function() {
                //上传成功，返回的文件名，设置到父节点的背景中  
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    // console.log(JSON.parse(xmlhttp.responseText))
                    let data = JSON.parse(xmlhttp.responseText);
                    console.log(data.file.filename)
                    document.getElementById("img").src = `http://localhost:3000/${data.file.filename}`;
                }
            }
            //构造form数据 你可以用它传输文件流 它是基于form-data的传输方案
        var data = new FormData();
        // 单图上传，默认选第一张，如果是多图的话，就要for循环遍历fileNode.files数组，并全部append到data里面传输
        data.append("abc", fileNode.files[0])
        xmlhttp.open("post", "http://localhost:3000/setting/upload", true);
        //不要缓存  
        //xmlhttp.setRequestHeader("If-Modified-Since", "0");  
        //提交请求  
        xmlhttp.send(data);
        //清除掉，否则下一次选择同样的文件就进入不到onchange函数中了  
        fileNode.value = null;
    }





})