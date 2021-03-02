<template>
    <div>
        <div class="flex">
            <ul id="items" class="list">
                <li id="grid1" data-cols="1">Grid</li>
                <li id="grid2" data-cols="2">Grid2</li>
                <li id="grid3" data-cols="3">Grid3</li>
                <li id="input">input</li>
                <li id="button">button</li>
            </ul>
            <ul id="items2" class="sorted">
                <li>item 2-1</li>
                <li>item 2-2</li>
                <li>item 2-3</li>
            </ul>
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
            let html,
                grids = "",
                newEl,
                cols;

            switch (evt.item.id) {
                case "grid1":
                case "grid2":
                case "grid3":
                    cols = +evt.item.dataset.cols || 1;

                    for (let index = 0; index < cols; index++) {
                        grids += `<ul id="grid${index}-${newID}" class="sorted"></ul>`;
                    }

                    html = `<div class="flex">${grids}</div>`;

                    evt.item.innerHTML = html;

                    for (let index = 0; index < cols; index++) {
                        newEl = document.getElementById(
                            `grid${index}-${newID}`
                        );
                        initSorted(newEl);
                    }

                    break;
                case "input":
                    html = `<input tyle="text" id="${newID}" value="${newID}"></input>`;

                    evt.item.innerHTML = html;
                    break;

                case "button":
                    html = `<button id="${newID}" @click="test">button</button>`;

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
