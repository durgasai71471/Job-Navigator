function fun() {
  let x = document.getElementsByClassName("buttons_IT")[0];
  x.style.display = "flex";
  x.style.width = "25%";
  x.style.left = "0px";
  var btn = document.getElementsByTagName("button");
  for(let i=0;i<6;i++){
    btn[i].style.display = "flex","block";
  }
  let y = document.getElementsByClassName('buttons_NON_IT')[0];
  y.style.display = "none";
  // alert("hey");
}

function fun1(cls2) {
  let x = document.getElementsByClassName("buttons_NON_IT")[0];
  x.style.display = "flex";
  x.style.width = "25%";
  x.style.left = "0px";
  var btn = document.getElementsByTagName("button");
  for (let i = 0; i < 5; i++) {
    btn[i+6].style.display = "flex", "block";
  }
  let y = document.getElementsByClassName("buttons_IT")[0];
  y.style.display = "none";
}

function display_buttons(event){
  if(event.target.value == "IT"){
    
    let x = document.getElementsByClassName("front_end")[0];
    x.style.display = "none";
    let y = document.getElementsByClassName("back_end")[0];
    y.style.display = "none";
    var z = document.getElementsByClassName("full_stack")[0];
    z.style.display = "none";
    var p = document.getElementsByClassName("tester")[0];
    p.style.display = "none";
    var q = document.getElementsByClassName("cloud_eng")[0];
    q.style.display = "none";
    var r = document.getElementsByClassName("manager")[0];
    r.style.display = "none";
    var s = document.getElementsByClassName("hr_rec")[0];
    s.style.display = "none";
    var t = document.getElementsByClassName("Marketing_exec")[0];
    t.style.display = "none";
    var u = document.getElementsByClassName("banking")[0];
    u.style.display = "none";
    var v = document.getElementsByClassName("sales_exec")[0];
    v.style.display = "none";
    var w = document.getElementsByClassName("assoc_analyst")[0];
    w.style.display = "none";
    fun();
  }
  else if (event.target.value == "NON IT") {
    let x = document.getElementsByClassName("front_end")[0];
    x.style.display = "none";
    let y = document.getElementsByClassName("back_end")[0];
    y.style.display = "none";
    var z = document.getElementsByClassName("full_stack")[0];
    z.style.display = "none";
    var p = document.getElementsByClassName("tester")[0];
    p.style.display = "none";
    var q = document.getElementsByClassName("cloud_eng")[0];
    q.style.display = "none";
    var r = document.getElementsByClassName("manager")[0];
    r.style.display = "none";
    var s = document.getElementsByClassName("hr_rec")[0];
    s.style.display = "none";
    var t = document.getElementsByClassName("Marketing_exec")[0];
    t.style.display = "none";
    var u = document.getElementsByClassName("banking")[0];
    u.style.display = "none";
    var v = document.getElementsByClassName("sales_exec")[0];
    v.style.display = "none";
    var w = document.getElementsByClassName("assoc_analyst")[0];
    w.style.display = "none";
    
    fun1();
  }
}

function fun2(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  let y = document.getElementsByClassName("back_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("full_stack")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("tester")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("cloud_eng")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("manager")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun3(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("full_stack")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("tester")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("cloud_eng")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("manager")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}

function fun4(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("tester")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("cloud_eng")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("manager")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}

function fun5(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("cloud_eng")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("manager")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun6(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("manager")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun7(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("hr_rec")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun8(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("manager")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("Marketing_exec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun9(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("manager")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("hr_rec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("banking")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
  
}
function fun10(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("manager")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("hr_rec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("Marketing_exec")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("sales_exec")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";

}
function fun11(id) {
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("manager")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("hr_rec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("Marketing_exec")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("banking")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("assoc_analyst")[0];
  w.style.display = "none";
}
function fun12(id){
  let x = document.getElementsByClassName(id)[0];
  x.style.display = "flex";
  var y = document.getElementsByClassName("front_end")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("back_end")[0];
  z.style.display = "none";
  var p = document.getElementsByClassName("full_stack")[0];
  p.style.display = "none";
  var q = document.getElementsByClassName("tester")[0];
  q.style.display = "none";
  var r = document.getElementsByClassName("cloud_eng")[0];
  r.style.display = "none";
  var s = document.getElementsByClassName("manager")[0];
  s.style.display = "none";
  var t = document.getElementsByClassName("hr_rec")[0];
  t.style.display = "none";
  var u = document.getElementsByClassName("Marketing_exec")[0];
  u.style.display = "none";
  var v = document.getElementsByClassName("banking")[0];
  v.style.display = "none";
  var w = document.getElementsByClassName("sales_exec")[0];
  w.style.display = "none";
}
