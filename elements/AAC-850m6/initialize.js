function(instance, context) {
  instance.data.icons = window.heroicons_solid;
  instance.data.click = (event) => {
    instance.triggerEvent("click");
    event.stopPropagation();
  };
}