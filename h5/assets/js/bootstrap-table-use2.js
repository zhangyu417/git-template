const columns=[{
    field: '_id.$oid',
    title: '编号'
}, {
    field: 'title',
    title: '名称'
}, {
    field: 'plot',
    title: '简介'
}]





$('#table').bootstrapTable({
    url: 'http://fa.cc/md/md.php',
    //classes: 'table table-hover',
    pagination: true,
    pageSize:3,
    pageList: [1,2,3,4,5,'All'],


    search: true,
    columns:columns,
})