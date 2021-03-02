<script>
export default {
    name: "DefaultComponent",
    render: function(createElement) {
        return createElement(
            this.item.tag,
            {
                style: this.item.style,
                class: this.item.class,
                attrs: this.item.attrs,
            },
            [
                createElement(
                    "div",
                    { class: "render-label" },
                    this.item.label
                ),
                this.item.value,
            ]
        );
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
