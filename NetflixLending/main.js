const tabItems = document.querySelectorALL('.tab-items');
const tabContentItems = document.querySelectorALL('.tab-content-items');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border')
  // Grab content item from DOM
  const tabContentItem = document.querySelector('#$(this.id)');
  // Add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
  tabItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem);
