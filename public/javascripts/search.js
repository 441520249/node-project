$(() => {
    let search = $("#search");
    let cha = (name) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "http://120.79.48.23:3000/setting/findUser",
                data: {
                    name

                },
                success(data) {
                    resolve(data)
                    reject(666)
                }
            })
        })
    }
    search.click(async() => {
        let name = $("#name").val();
        let data = await cha(name);
        console.log(data)
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
    });











})