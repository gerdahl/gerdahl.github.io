const panels = document.querySelectorAll('.panel');
  function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open'); /*when a panel is clicked, it opens*/
  }
  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
  panels.forEach(panel => panel.addEventListener('click', toggleOpen)); /*listening for a click on each panel*/
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
