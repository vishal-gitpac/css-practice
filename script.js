function toggle(node) {
  var blur = document.getElementById("wrapper");
  var body = document.getElementsByTagName("BODY")[0];
  blur.classList.toggle("active");
  if (body.style["padding"] === "0px") {
    body.style["padding"] = "0 0 4em 0";
  } else {
    body.style["padding"] = "0px";
  }

  var src = node.children[0].src.slice(
    node.children[0].src.length - 6,
    node.children[0].src.length
  );
  var text1 = node.children[1].innerHTML;
  var text2 = node.children[2].innerHTML;

  var container = document.getElementById("container");
  container.classList.toggle("active");

  // console.log(src, text1, text2);
  // console.log(node.children[0].src);

  container.children[0].src = "assets/images/" + src;
  container.children[1].innerHTML = text1;
  container.children[2].innerHTML = text2;
}

function popout() {
  var blur = document.getElementById("wrapper");
  var body = document.getElementsByTagName("BODY")[0];
  blur.classList.toggle("active");
  if (body.style["padding"] === "0px") {
    body.style["padding"] = "0 0 4em 0";
  } else {
    body.style["padding"] = "0px";
  }
  var container = document.getElementById("container");
  container.classList.toggle("active");
}
