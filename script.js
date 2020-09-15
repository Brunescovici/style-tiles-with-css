document.querySelector(".outline").addEventListener("mouseover", MoveOutline);
document.querySelector("button").addEventListener("mouseover", MoveOutline);
document.querySelector(".outline").addEventListener("mouseout", MoveOutline2);
document.querySelector("button").addEventListener("mouseout", MoveOutline2);

function MoveOutline()
{
    document.querySelector(".outline").style.top="-6px";
    document.querySelector(".outline").style.left="-10px";
}
function MoveOutline2()
{
    document.querySelector(".outline").style.top="-9px";
    document.querySelector(".outline").style.left="-14px";
}
