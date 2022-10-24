function(instance, properties, context) {
  let icons = instance.data.icons;

  let icon;
  if (properties.name) {
    icon = icons.get(properties.name);
  } else {
    icon = icons.get(properties.icon);
  }
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