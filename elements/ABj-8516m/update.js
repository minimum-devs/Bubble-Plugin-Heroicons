function(instance, properties, context) {
  let root = instance.canvas.get(0);
  let svg = root.firstChild;
  let type = properties.type;
    
  let icons;

  if(type === "Outline") {
    icons = window.heroicons_outlined;
  } else if (type === "Solid") {
    icons = window.heroicons_solid;
  } else {
    icons = window.heroicons_mini;
  }

  let icon_name = properties.name || properties.icon;

  if (!svg || icon_name !== instance.data.current_icon_name || type !== instance.data.current_icon_type) {
    instance.data.current_icon_name = icon_name;
    instance.data.current_icon_type = type;
    let icon = icons.get(icon_name);
    root.innerHTML = icon;
    svg = root.firstChild;
  }
  
  if(type === "Outline") {
    svg.setAttribute("stroke", properties.color);
  } else {
    svg.setAttribute("fill", properties.color);
  }

  if(properties.stroke_width) {
    svg.setAttribute("stroke-width", properties.stroke_width);
  }   
    
    
  root.style.setProperty('--transition-duration', (properties.transition_duration ? properties.transition_duration / 1000 + 's' : '0s')); 
  root.style.setProperty('--transition-easing', (properties.transition_easing || 'linear').toLowerCase().replace(' ', '-')); 

  svg.classList.add("hicon");
  
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