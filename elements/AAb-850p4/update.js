function(instance, properties, context) {
  let root = instance.canvas.get(0);
  let svg = root.firstChild;
  let icons = instance.data.icons;

  let icon_name = properties.name || properties.icon;

  if (!svg || icon_name !== instance.data.current_icon_name) {
    instance.data.current_icon_name = icon_name;
    let icon = icons.get(icon_name);
    root.innerHTML = icon;
    svg = root.firstChild;
  }

  svg.setAttribute("fill", properties.color);

  let transition_duration_s = properties.transition_duration ? properties.transition_duration / 1000 + 's' : '0s';

  root.style.setProperty('--transition-duration', transition_duration_s);

  let easing = properties.transition_easing ? properties.transition_easing.toLowerCase() : 'linear';
  easing = easing.replace(' ', '-');
  root.style.setProperty('--transition-easing', easing);

  svg.classList.add("mini");

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