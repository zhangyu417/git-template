$('#table').bootstrapTable({
    pagination: true,
    search: true,
    columns: [{
        field: 'id',
        title: '编号'
    }, {
        field: 'name',
        title: '名称'
    }, {
        field: 'price',
        title: '价格'
    }],
    data: [{
        id: 1,
        name: '苹果',
        price: '$11'
    }, {
        id: 2,
        name: '香蕉',
        price: '$22'
    }]
})