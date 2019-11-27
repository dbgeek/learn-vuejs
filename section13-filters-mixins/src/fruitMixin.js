export const fruitMixin = {
    data() {
        return {
            text: "hello there!",
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filterText: ""
        };
    },
    computed: {
        filterdFruits() {
            return this.fruits.filter(element => {
                return element.match(this.filterText);
            });
        }
    },
}