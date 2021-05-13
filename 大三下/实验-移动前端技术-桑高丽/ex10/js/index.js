$(document).ready(load())

// 为原本存在的tr绑定事件
function load() {
  $('tr')
    .slice(1)
    .each(function () {
      // slice(1)表示下标从1开始的数组元素 遍历每一行 除去表头
      var old = this
      $(this)
        .children()
        .slice(1)
        .click(function () {
          // 遍历每一列 除去复选框存在的第一列
          $($(old).children()[0])
            .children()
            .each(function () {
              // 遍历td里的子节点
              if (this.type == 'checkbox') {
                //如果 子节点类型为复选框则执行
                if (!this.checked) {
                  this.checked = true
                } else {
                  this.checked = false
                }
              }
            })
        })
    })
}

// 新增一行
var index = 1
$('#add').click(function add() {
  index++ // 新增一行索引+1
  // 获取新的tr td
  var newtr = $('<tr></tr>')
  var newtd = $(
    "<td><input type='checkbox' name='checkbox'/></td><td>004</td><td>《java编程思想》</td><td>陈老师</td><td>40</td>"
  )
  // 将新的tr添加到最后一个tr的后面
  $('tr:last').after(newtr)
  // 添加子节点
  // 添加td
  $('tr:last').append(newtd)
  // 隔行变色
  if (index % 2 == 0) {
    $('tr:last').attr('class', 'info')
  } else {
    $('tr:last').attr('class', 'warning')
  }
  newload(newtr)
})

// 复制一行并新增
$('#copy').click(function copy() {
  index++ // 新增一行索引+1
  // 获取选中的行
  $('tr')
    .slice(1)
    .each(function () {
      var old = this
      var nid = $($(this).children()[1]).text()
      var nclassname = $($(this).children()[2]).text()
      var nname = $($(this).children()[3]).text()
      var nnum = $($(this).children()[4]).text()
      var td = $(this).children()[0]
      var input = $(td).children()[0]
      if (input.checked) {
        // 获取新的tr td
        var newtr = $('<tr></tr>')
        var newtd = $(
          `<td><input type='checkbox' name='checkbox'/></td><td>${nid}</td><td>${nclassname}</td><td>${nname}</td><td>${nnum}</td>`
        )
        // 将新的tr添加到最后一个tr的后面
        $('tr:last').after(newtr)
        // 添加子节点
        // 添加td
        $('tr:last').append(newtd)
        // 隔行变色
        if (index % 2 == 0) {
          $('tr:last').attr('class', 'info')
        } else {
          $('tr:last').attr('class', 'warning')
        }
        newload(newtr)
      }
    })
})

// 遍历新增的tr 给新增的添加click事件
function newload(newtr) {
  $(newtr)
    .children()
    .slice(1)
    .click(function () {
      var td = $(newtr).children()[0]
      var input = $(td).children()[0]
      if (!input.checked) {
        input.checked = true
        console.log('t')
      } else {
        console.log('b')
        input.checked = false
      }
    })
}

// 删除选中行
$('#del').click(function () {
  // 获取选中的行
  $('tr')
    .slice(1)
    .each(function () {
      var old = this
      var td = $(this).children()[0]
      var input = $(td).children()[0]
      if (input.checked) {
        //删除节点
        $(old).remove()
      }
    })
})

// 反选选中行
$('#inverse').click(function () {
  $("input[name='checkbox']").each(function () {
    if ($(this).attr('checked')) {
      $(this).removeAttr('checked')
    } else {
      $(this).attr('checked', 'true')
    }
  })
})

// 查询
$('#select').click(function () {
  // 获取输入框的值
  var id = $('#selId').val()
  var name = $('#selName').val()
  // 遍历每一行获得序号和姓名
  $('tr')
    .slice(1)
    .each(function () {
      var oid = $($(this).children()[1]).text()
      var oname = $($(this).children()[3]).text()
      if (id == oid || name == oname) {
        $(this)
          .siblings()
          .slice(1)
          .each(function () {
            var nid = $($(this).children()[1]).text()
            var nname = $($(this).children()[2]).text()
            if (nid == id || nname == name) {
              $(this).show()
            } else {
              $(this).hide()
            }
          })
      }
    })
})
// 编辑
$('#updata').click(function () {
  // 获取选中的行
  $('tr')
    .slice(1)
    .each(function () {
      var td = $(this).children()[0]
      var input = $(td).children()[0]
      if (input.checked) {
        $(this).children().slice(1).attr('contenteditable', 'true')
      }
    })
})
