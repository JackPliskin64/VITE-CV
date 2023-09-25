
function filterSkills() {
  var input = document.getElementById('filter');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('skill-elements');
  var li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    var textP = li[i].getElementsByTagName('p')[0];
    var textValue = textP.textContent || textP.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    }
  }
}
