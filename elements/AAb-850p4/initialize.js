function(instance, context) {
  instance.data.icons = window.heroicons_mini;
    
  instance.data.click = (event) => {
    instance.triggerEvent("click");
    event.stopPropagation();
  };
}