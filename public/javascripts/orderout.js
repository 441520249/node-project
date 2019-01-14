$(() => {
    let signout = $("#signout");
    let jian = function(name, age, address, city, tip) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://120.79.48.23:3000/setting/del",
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
    signout.click(async() => {
        let name = $("#name").val();
        let age = $("#age").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let tip = $("#tip").val();
        let data = await jian(name, age, address, city, tip);
        if (data === 'success') {
            console.log('删除成功');
            location.href = "../dashboard.html"
        } else {
            console.log('删除失败');
        }
    })











})