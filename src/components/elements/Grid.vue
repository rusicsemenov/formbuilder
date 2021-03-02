<script>
import sortable from "sortablejs/modular/sortable.complete.esm.js";

export default {
    name: "Grid",
    render: function(createElement) {
        return createElement(
            "div",
            {
                style: [],
                class: ["d-flex"],
                attrs: this.item.attrs,
            },
            [
                this.children.map(function(el) {
                    return createElement("ul", {
                        style: {
                            border: "1px solid black",
                            flex: "1 1 auto",
                            minHeight: "200px",
                            minWidth: "200px",
                        },

                        attrs: {
                            id: el.id,
                        },
                    });
                }),
            ]
        );
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        children() {
            const time = new Date().getTime();

            let childen = [],
                i,
                id;

            for (i = 0; i < this.item.variables.cols; i++) {
                id = `ul${i}-${time}`;
                childen.push({ id });
            }
            return childen;
        },
    },
    mounted() {
        this.children.forEach(element => {
            var elem = document.getElementById(element.id);
            sortable.create(elem, {
                animation: 200,
                group: {
                    name: "shared",
                    revertClone: true,
                },
                sort: true,
            });
        });
    },
};
</script>
