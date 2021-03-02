<template>
    <div>
        <div class="flex">
            <ul id="items" class="list">
                <li id="header" data-cols="1">Header</li>
                <li id="paragraph" data-cols="2">Paragraph</li>
            </ul>
            <ul id="items2" class="sorted"></ul>
        </div>
    </div>
</template>

<script>
// Complete SortableJS (with all plugins)
import sortable from "sortablejs/modular/sortable.complete.esm.js";

const initSorted = id => {
    const newID = new Date().getTime();

    sortable.create(id, {
        animation: 200,
        group: "shared",

        onAdd: function(evt) {
            let html;

            switch (evt.item.id) {
                case "header":
                    html = `<h1 id="${newID}">h1 text</h1>`;
                    evt.item.innerHTML = html;
                    break;

                case "paragraph":
                    html = `<p id="${newID}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quisquam suscipit, placeat facere aut odio. Nobis eius perspiciatis voluptate optio quidem illo, doloremque repudiandae corrupti dolores fugiat consequatur, adipisci praesentium!</p>`;
                    evt.item.innerHTML = html;
                    break;

                default:
                    break;
            }
        },
    });
};

export default {
    name: "Sortablejs",
    mounted() {
        var el = document.querySelector("#items");
        var el2 = document.querySelector("#items2");
        sortable.create(el, {
            animation: 200,
            group: {
                name: "shared",
                pull: "clone",
                revertClone: true,
            },
            sort: true,
            // ghostClass: 'ghost',
        });
        initSorted(el2);
    },
};
</script>
