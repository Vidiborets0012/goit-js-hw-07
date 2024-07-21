function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const divWidget = document.querySelector('.widget')

const divWidgetWrapper = document.createElement('div');

divWidgetWrapper.appendChild(divWidget);

document.body.appendChild(divWidgetWrapper);

divWidgetWrapper.style.display = 'flex';
divWidgetWrapper.style.alignItems = 'flex-start';
divWidgetWrapper.style.justifyContent = 'flex-start';
divWidgetWrapper.style.flexDirection = 'column';
divWidgetWrapper.style.gap = '10px';
divWidgetWrapper.style.borderRadius = '8px';
divWidgetWrapper.style.padding = '100px 88px';
divWidgetWrapper.style.width = '345px';
divWidgetWrapper.style.height = '280px';
divWidgetWrapper.style.backgroundColor = '#ffffff';


changeColorButton.addEventListener('click', () => {
  
  const newColor = getRandomHexColor();
    
  body.style.backgroundColor = newColor;
    
  colorSpan.textContent = newColor;
});
