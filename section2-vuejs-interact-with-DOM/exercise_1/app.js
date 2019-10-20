
new Vue({
    el: '#exercise',
    data: {
        name: "Björn Ahl",
        age: 41,
        url: "https://dashingdesignerdogs.com.au/wp-content/uploads/2019/04/Doggy-Day-Care-Mornington-3.jpg"
    },
    methods: {
        ageMultiple: function() {
            return this.age * 3;
        },
        randomFloat: function() {
            return Math.random();
        }
    }
})