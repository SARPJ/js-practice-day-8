function abc() {
  let a = document.getElementById("box");
  let b = document.getElementById("box2");
  let c = document.getElementById("per");
  let sub1 = parseInt(document.getElementById("mar1").value);
  let sub2 = parseInt(document.getElementById("mar2").value);
  let sub3 = parseInt(document.getElementById("mar3").value);
  let sub4 = parseInt(document.getElementById("mar4").value);
  let sub5 = parseInt(document.getElementById("mar5").value);

  a.style.left = 0;
  b.style.right = 0;
  c.innerText = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
  b.style.innervalue = pe;
}
