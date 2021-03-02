<script>
import sortable from "sortablejs/modular/sortable.complete.esm.js";

export default {
    name: "ParentUl",
    render: function(createElement) {
        return createElement(
            "div",
            {
                class: ["d-flex"],
            },
            Array.apply(null, { length: 2 }).map(function(el, index) {
                return createElement(
                    "ul",
                    {
                        style: [
                            {
                                border: "1px solid black",
                                flex: "1 1 auto",
                                minHeight: "200px",
                            },
                        ],
                        attrs: {
                            id: index + this.id,
                        },
                    },
                    "sss"
                );
            })
        );
    },
    props: {
        count: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        id() {
            const time = new Date().getTime();
            return "ul" + "-" + time;
        },
    },
    mounted() {
        var elem = document.getElementById(this.id);
        sortable.create(elem, {
            animation: 200,
            group: {
                name: "shared",
                revertClone: true,
            },
            sort: true,
        });
    },
};
</script>
