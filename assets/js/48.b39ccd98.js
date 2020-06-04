(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{360:function(t,_,v){"use strict";v.r(_);var a=v(2),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[t._v("数据库关系代数相关学习笔记")])]),t._v(" "),v("h2",{attrs:{id:"what"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),v("p",[t._v("关系代数是指用符号来对数据的操作")]),t._v(" "),v("p",[t._v("主要操作包括")]),t._v(" "),v("ol",[v("li",[t._v("选择")]),t._v(" "),v("li",[t._v("投影")]),t._v(" "),v("li",[t._v("连接")])]),t._v(" "),v("h4",{attrs:{id:"选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择"}},[t._v("#")]),t._v(" 选择")]),t._v(" "),v("p",[t._v("选择运算的含义是指在关系中选择满足给定条件的诸元素,运算符的符号为σ")]),t._v(" "),v("p",[t._v("例如,我们查询一张学生表(tb_student)中系名(dept_name)为信息系的就可以使用下面的运算符表达")]),t._v(" "),v("p",[v("code",[t._v("σ dept_name='信息系' (tb_student)")])]),t._v(" "),v("p",[t._v("注:选择运算是从表的行的角度来进行运算的,筛选出符合条件的行")]),t._v(" "),v("h4",{attrs:{id:"投影"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#投影"}},[t._v("#")]),t._v(" 投影")]),t._v(" "),v("p",[t._v("投影运算的含义是指选出一个表的若干个属性来组成新的属性,运算符的符号为π")]),t._v(" "),v("p",[t._v("例如,我们需要从学生表(tb_student)中选择出学生的姓名(name)和性别(sex),就可以使用下面的运算符来表达")]),t._v(" "),v("p",[v("code",[t._v("π name,sex (tb_student)")])]),t._v(" "),v("p",[t._v("注:选择运算是从表的列的角度来进行运算的,筛选出要筛选出的列")]),t._v(" "),v("h4",{attrs:{id:"连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[t._v("#")]),t._v(" 连接")]),t._v(" "),v("p",[t._v("有时候,我们需要的数据信息需要从多个表中筛选出来,这是我们需要先考虑表之间怎么建立联系,这时候我们就需要先将多张表进行连接")]),t._v(" "),v("p",[t._v("连接运算的含义就是从两个表的笛卡尔积中选取属性间满足一定条件的元素")]),t._v(" "),v("p",[t._v("表之间的连接方式如下")]),t._v(" "),v("ol",[v("li",[t._v("全外连接 表之间做笛卡尔积")]),t._v(" "),v("li",[t._v("左外连接 表之间做笛卡尔积,然后左表有的留下,对应的右表设null")]),t._v(" "),v("li",[t._v("右外连接 表之间做笛卡尔积,然后有表有的留下,对应的左表设null")]),t._v(" "),v("li",[t._v("内连接   表之间做笛卡尔积,然后只保留左右表都有的")])]),t._v(" "),v("h2",{attrs:{id:"how"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[t._v("#")]),t._v(" How")]),t._v(" "),v("h4",{attrs:{id:"思路总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思路总结"}},[t._v("#")]),t._v(" 思路总结")]),t._v(" "),v("p",[t._v("可以按照以下步骤来写出关系代数")]),t._v(" "),v("ol",[v("li",[t._v("考虑要获取的数据涉及到哪几张表")]),t._v(" "),v("li",[t._v("考虑那几张表之间的关系是什么,是采用等值连接相连还是采用自然连接相连")]),t._v(" "),v("li",[t._v("我们需要从连接好的表获取哪几列数据")]),t._v(" "),v("li",[t._v("我们需要获取的行有哪些条件")])])])}),[],!1,null,null,null);_.default=s.exports}}]);