const MunroView = function (parent, munro){
  this.parent = parent;
  this.munro = munro;
}

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munrosList = this.createMunrosList();
  munroContainer.appendChild(munrosList);

  this.parent.appendChild(munroContainer);
};

MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createMunrosList = function () {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munros');
  this.populateList(munrosList);
  return munrosList;
};

MunroView.prototype.populateList = function (list) {
    const munroListItem1 = document.createElement('li');
    munroListItem1.textContent = this.munro.meaning;
    list.appendChild(munroListItem1);

    const munroListItem2 = document.createElement('li');
    munroListItem2.textContent = this.munro.height;
    list.appendChild(munroListItem2);

    return list;
};


module.exports = MunroView;
