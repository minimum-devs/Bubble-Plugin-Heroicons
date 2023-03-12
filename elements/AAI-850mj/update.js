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
  svg.setAttribute("stroke", properties.color);
        
  if(properties.stroke_width) {
    svg.setAttribute("stroke-width", properties.stroke_width);
  }  

  $(root).off("mousedown");

  if (properties.clickable) {
    root.style.cursor = "pointer";
    root.addEventListener("click", instance.data.click);
  } else {
    root.style.cursor = "inherit";
    root.removeEventListener("click", instance.data.click);
  }

  if (properties.tooltip) {
    root.setAttribute("title", properties.tooltip);
  }
}