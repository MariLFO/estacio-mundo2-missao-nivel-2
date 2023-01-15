let vue = Vue.createApp({
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = await loadUsers();
    }
}).mount("#usuarios");

async function loadUsers()
{
    var response = await $.ajax({
        url: "https://reqres.in/api/users?per_page=10",
        type: "GET"
    });
    return response.data;
}