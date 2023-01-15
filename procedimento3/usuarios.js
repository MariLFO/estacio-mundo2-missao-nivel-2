$.ajax({
    url: "https://reqres.in/api/users?per_page=10",
    type: "GET",
    success: function(response){
        console.log(response.data);
        Vue.createApp({
            data() {
                return {
                    users: response.data
                }
            },
        }).mount("#usuarios");
    }
});