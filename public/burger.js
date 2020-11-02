// console.log("js success");


$(() => {
    $(".form").on("submit" , (e) => {
        e.preventDefault();
        let order = { burger_name: $("#newOrder").val().trim(), devoured: 0 };

        $.ajax("/api/burgers", {
            type: "POST",
            data: order,
        }).then(location.reload());
    });

    $(".devourBtn").on("click", (e) => {
        e.preventDefault();
        let id = $(e.target).data("id");
        let devoured = { devoured: 1};

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devoured
        }).then(()=> {
            location.reload();
        });
    });

    $(".clearTable").on("click", (e) => {
        e.preventDefault();
        let id = $(e.target).data("id");

        $.ajax({
            type: "DELETE",
            url: `api/burgers/${id}`
        }).then(
            location.reload());
    });
});