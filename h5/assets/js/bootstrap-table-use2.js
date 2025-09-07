const columns = [{
    field: 'id',
    title: '编号'
}, {
    field: 'name',
    title: '名称'
}, {
    field: 'plot',
    title: '简介'
}
, {
    title: '操作',
    formatter: function (value, row) {
        let str=[];
        str.push('<a class="btn btn-info" href="/edit?id='+row.id+'">编辑</a>');
        str.push('<a style="margin-left:10px" class="btn btn-danger" href="/delete?id='+row.id+'">删除</a>');
        return str.join('');
    }
}

]




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