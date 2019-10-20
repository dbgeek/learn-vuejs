new Vue({
        el: '#exercise',
        data: {
            value: '',
        },
        methods: {
            alertMe: function() {
                alert('alert!');
            },
            keyUp: function(event) {
                this.value = event.target.value;
            }
        }
    });