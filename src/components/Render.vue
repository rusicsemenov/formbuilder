<template>
    <div>
        <div class="flex">
            <ul id="items" class="list">
                <li
                    v-for="(item, index) in content"
                    :key="index"
                    v-text="item.label"
                    @click="addElem(item)"
                ></li>
            </ul>
            <ul id="renderUl" class="sorted" ref="parent">
                <li v-for="(item, index) in renderContent" :key="index">
                    <component
                        :is="item.type || 'DefaultComponent'"
                        :item="item"
                        @editEl.prevent="editEl"
                        @click.native="editEl(item)"
                    />
                    <div class="action-buttons">
                        <button
                            class="btn btn-primary m-1"
                            @click.stop="editItem(item)"
                        >
                            <i class="mdi mdi-cog" />
                        </button>
                        <button
                            class="btn btn-danger m-1"
                            @click.stop="deleteItem(index)"
                        >
                            <i class="mdi mdi-delete" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <button class="btn btn-info m-1" @click="get">
            get
        </button>
        <button class="btn btn-info m-1" @click="save">
            save
        </button>
    </div>
</template>

<script>
import sortable from "sortablejs/modular/sortable.complete.esm.js";

export default {
    name: "Render",
    components: {
        DefaultComponent: () =>
            import("@/components/elements/DefaultComponent"),
        Grid: () => import("@/components/elements/Grid"),
    },
    data() {
        return {
            content: [
                {
                    label: "Grid",
                    tag: "div",
                    type: "Grid",
                    variables: {
                        cols: 3,
                    },
                    style: {
                        width: "30%",
                    },
                },
                {
                    label: "Header",
                    tag: "h2",
                    value: "value h2",
                },
                {
                    label: "Paragraph",
                    tag: "p",
                    value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at laudantium similique omnis officiis, minus corrupti libero atque sunt. Dicta a quae enim placeat. Tempore atque est dolorem hic. Fugiat?",
                },
                {
                    label: "Input",
                    tag: "input",
                    value: "text",
                },
            ],
            renderContent: [],
            mainContainer: undefined,
        };
    },
    methods: {
        newId(tag) {
            const time = new Date().getTime();
            return tag + "-" + time;
        },
        addElem(item) {
            const newItem = JSON.parse(
                JSON.stringify(
                    Object.assign({ attrs: { id: this.newId(item.tag) } }, item)
                )
            );
            this.renderContent.push(newItem);
        },
        editEl(item) {
            alert(JSON.stringify(item, null, 4));
        },
        deleteItem(index) {
            this.renderContent.splice(index, 1);
        },
        editItem(item) {
            let result = prompt("Кол-во колонок?", item.variables.cols);
            item.variables.cols = result;
        },
        onDrop(elem) {
            console.log(elem);
            const name = elem.item.innerText;
            const item = this.content.find(el => el.label === name);
            if (item) this.addElem(item);
        },
        save() {
            console.log(this.$refs.parent);
        },
        get() {
            // this.renderContent = JSON.parse(localStorage.getItem("renderGrid"));
        },
    },
    mounted() {
        let renderUl;
        let _this = this;

        renderUl = document.getElementById("items");
        sortable.create(renderUl, {
            animation: 200,
            group: {
                name: "shared",
                pull: "clone",
                put: false,
                revertClone: true,
            },
            sort: true,
        });

        renderUl = document.getElementById("renderUl");
        this.mainContainer = sortable.create(renderUl, {
            animation: 200,
            group: {
                name: "shared",
                revertClone: true,
            },
            sort: true,
            onAdd: function(evt) {
                _this.onDrop(evt);
                evt.to.children[evt.newIndex].remove();
                return false;
            },
        });
    },
};
</script>
