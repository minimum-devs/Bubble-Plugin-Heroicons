function(instance, properties, context) {
  let icons = instance.data.icons;

  let icon;
  if (properties.name) {
    icon = icons.get(properties.name);
  } else {
    icon = icons.get(properties.icon);
  }

  let root = instance.canvas.get(0);
    
  root.style.color = properties.color;  
  root.innerHTML = icon;
}