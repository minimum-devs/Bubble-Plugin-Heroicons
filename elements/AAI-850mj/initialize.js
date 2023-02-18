function(instance, context) {
  instance.data.icons = window.heroicons_outlined;
  instance.data.click = (event) => {
    instance.triggerEvent("click");
    event.stopPropagation();
  };
}