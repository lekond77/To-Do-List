let jq = $.noConflict();

jq(document).ready(function () {
  //Create a new element
  function addNewToDO() {
    let text = jq("#text").val();
    let deleteAndTimer = jq(
      '<button class="delete" style="font-size: 23px;">&#128465</button>'
    );
    if (text === "") {
      alert("Le contenu est vide !");
    } else if (text.length > 52) {
      alert("Veuillez diminuer la longueur de votre text ! ");
    } else {
      list = jq("<li></li>").html('<input type="checkbox"></input>' + text);
      list.append(deleteAndTimer);
      jq("ul").append(list);
    }
    let deleteList = jq(".delete");
    for (let i = 0; i < deleteList.length; i++)
      deleteList[i].onclick = function () {
        let li = jq(this).parent();
        li.remove();
      };
  }

  //delete selected elements
  jq("#delete").click(function () {
    let checked = jq("input[type='checkbox']:checked");
    checked.length !== 0
      ? checked.parent().remove()
      : alert("Vous devez selectionner au moins un élément !");
  });

  jq("#add").click(function () {
    addNewToDO();
  });
});
