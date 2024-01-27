function(instance, context) {
  instance.data.click = (event) => {
    instance.triggerEvent("click");
    event.stopPropagation();
  };
}