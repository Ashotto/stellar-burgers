/* eslint-disable */
var addSorting = (function() {
    'use strict';
    var currentSort = {
            index: 0,
            desc: false
        },
        cols;

    function getTable() {
        return document.querySelector('.coverage-summary');
    }

    function getTableHeader() {
        return getTable().querySelector('thead tr');
    }

    function getTableBody() {
        return getTable().querySelector('tbody');
    }

    function getNthColumn(n) {
        return getTableHeader().querySelectorAll('th')[n];
    }

    function loadColumns() {
        var colNodes = getTableHeader().querySelectorAll('th'),
            cols = [],
            colNode,
            col,
            i;

        for (i = 0; i < colNodes.length; i += 1) {
            colNode = colNodes[i];
            col = {
                key: colNode.getAttribute('data-col'),
                sortable: !colNode.getAttribute('data-nosort'),
                type: colNode.getAttribute('data-type') || 'string'
            };
            cols.push(col);
            if (col.sortable) {
                col.defaultDescSort = col.type === 'number';
                colNode.innerHTML = colNode.innerHTML + '<span class="sorter"></span>';
            }
        }
        return cols;
    }

    function loadRowData(tableRow) {
        var tableCols = tableRow.querySelectorAll('td'),
            data = {},
            colNode,
            col,
            val,
            i;

        for (i = 0; i < tableCols.length; i += 1) {
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute('data-value');
            if (col.type === 'number') {
                val = Number(val);
            }
            data[col.key] = val;
        }
        return data;
    }

    function loadData() {
        var rows = getTableBody().querySelectorAll('tr'),
            i;

        for (i = 0; i < rows.length; i += 1) {
            rows[i].data = loadRowData(rows[i]);
        }
    }

    function sortByIndex(index, desc) {
        var key = cols[index].key,
            tableBody = document.querySelector('.coverage-summary tbody'),
            rowNodes = tableBody.querySelectorAll('tr'),
            rows = [],
            sorter = function(a, b) {
                a = a.data[key];
                b = b.data[key];
                return a < b ? -1 : a > b ? 1 : 0;
            },
            finalSorter = desc ? function(a, b) {
                return -1 * sorter(a, b);
            } : sorter,
            i;

        for (i = 0; i < rowNodes.length; i += 1) {
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
        }

        rows.sort(finalSorter);

        for (i = 0; i < rows.length; i += 1) {
            tableBody.appendChild(rows[i]);
        }
    }

    function removeSortIndicators() {
        var col = getNthColumn(currentSort.index),
            cls = col.className.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
        col.className = cls;
    }

    function addSortIndicators() {
        getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
    }

    function onFilterInput() {
        const searchValue = document.getElementById('fileSearch').value.toLowerCase();
        const rows = document.getElementsByTagName('tbody')[0].children;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            row.style.display = row.textContent.toLowerCase().includes(searchValue) ? '' : 'none';
        }
    }

    function addSearchBox() {
        var template = document.getElementById('filterTemplate');
        var templateClone = template.content.cloneNode(true);
        templateClone.getElementById('fileSearch').oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
    }

    function enableUI() {
        var ithSorter = function(i) {
                return function() {
                    var col = cols[i],
                        desc = currentSort.index === i ? !currentSort.desc : col.defaultDescSort;
                    
                    sortByIndex(i, desc);
                    removeSortIndicators();
                    currentSort.index = i;
                    currentSort.desc = desc;
                    addSortIndicators();
                };
            },
            i, el;

        for (i = 0; i < cols.length; i += 1) {
            if (cols[i].sortable) {
                el = getNthColumn(i).querySelector('.sorter').parentElement;
                if (el.addEventListener) {
                    el.addEventListener('click', ithSorter(i));
                } else {
                    el.attachEvent('onclick', ithSorter(i));
                }
            }
        }
    }

    return function() {
        if (!getTable()) {
            return;
        }
        cols = loadColumns();
        loadData();
        addSearchBox();
        addSortIndicators();
        enableUI();
    };
})();

window.addEventListener('load', addSorting);