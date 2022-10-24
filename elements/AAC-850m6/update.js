function(instance, properties, context) {

  const icon = window.heroicons_solid.get(properties.name ?? properties.icon);

  let root = instance.canvas.get(0);
  root.innerHTML = icon;
  let svg = root.firstChild;
  svg.setAttribute("fill", properties.color);

  if (properties.clickable) {
    root.style.cursor = "pointer";
    if (!instance.data.listener) {
      instance.data.listener = true;
      root.addEventListener("click", (event) => {
        event.stopPropagation();
        root.setAttribute("listener", "true");
        instance.triggerEvent("click");
      });
    }
  }
}