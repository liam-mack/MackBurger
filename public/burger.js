
// Default function selecting DOM and applying necessary event handlers
$(() => {

    // Event handler for form submit, POSTS new order/burger
    $(".form").on("submit" , (e) => {
        e.preventDefault();
        let order = { burger_name: $("#newOrder").val().trim(), devoured: 0 };

        $.ajax("/api/burgers", {
            type: "POST",
            data: order,
        }).then(location.reload());
    });

    // Event handler for devour button, updates (PUTS) devour value and reloads page with burger in new table
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

    // Event handler for wrongOrder button, updates (PUTS) devour value to 0, reloads with order in original queue table
    $(".wrongOrder").on("click", (e) => {
        e.preventDefault();
        let id = $(e.target).data("id");
        let devoured = { devoured: 0};

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devoured
        }).then(()=> {
            location.reload();
        });
    });

    // Event handler to process DELETE requests, reloads target with new values 
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