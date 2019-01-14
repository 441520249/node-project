$(() => {
    let getUserList = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://localhost:3000/setting/findUser",
                success(data) {
                    resolve(data)
                }
            })
        })
    };
    (async() => {
        let data = await getUserList();
        // console.log(data);
        let html = data.map((item, index) => {
            return `
                <tr id="${index}">
                    <td>${item._id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.address}</td>
                    <td>${item.city}</td>
                    <td>${item.tip}</td>
                </tr>            
            `
        }).join("");
        $("#list").html(html);
    })();


})