$(() => {
    let modifi = $("#modifi");
    let gai = (name, age, address, city, tip) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://localhost:3000/setting/update",
                data: {
                    name,
                    age,
                    address,
                    city,
                    tip
                },
                success(data) {
                    resolve(data);
                    reject(666);
                }
            })
        })
    }
    modifi.click(async() => {
        let name = $("#name").val();
        let age = $("#age").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let tip = $("#tip").val();
        let data = await gai(name, age, address, city, tip);
        location.href = "../dashboard.html"
    })











})