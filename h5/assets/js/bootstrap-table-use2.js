const columns = [{
    field: 'id',
    title: '编号'
}, {
    field: 'name',
    title: '名称'
}, {
    field: 'plot',
    title: '简介'
}]




/***
* 
*/

$('#table').bootstrapTable({
    url: 'http://fa.cc/md/sqllite.php',
    method: 'GET',
    dataType: "json",
    dataField: 'rows',
    sidePagination: 'server',
    classes: 'table table-hover',
    pagination: true,
    pageSize: 5,
    pageList: [1, 2, 3, 4, 5, 'All'],


    search: true,
    columns: columns,
})