// ===== 页面内容挂载 =====
document.getElementById("sys1").innerHTML = `
<h2>加药加氯系统</h2>
<p>这里放加药、加氯计算模块。</p>
`;

document.getElementById("sys2").innerHTML = `
<h2>配药系统</h2>
<p>这里放一期、二期混助配药计算。</p>
`;

document.getElementById("sys3").innerHTML = `
<h2>消耗核算系统</h2>
<p>这里放药剂消耗核算逻辑。</p>
`;

// ===== 顶部导航切换逻辑 =====
const buttons = document.querySelectorAll(".nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});