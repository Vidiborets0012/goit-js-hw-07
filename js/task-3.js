
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const h1 = nameOutput.parentElement;

const inputWrapper = document.createElement('div');

inputWrapper.append(nameInput);
inputWrapper.append(h1);

document.body.append(inputWrapper);

inputWrapper.style.display = 'flex';
inputWrapper.style.alignItems = 'flex-start';
inputWrapper.style.justifyContent = 'flex-start';
inputWrapper.style.flexDirection = 'column';
inputWrapper.style.gap = '16px';
inputWrapper.style.borderRadius = '8px';
inputWrapper.style.padding = '24px';
inputWrapper.style.width = '408px';
inputWrapper.style.height = '136px';
inputWrapper.style.backgroundColor = '#ffffff';


nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() ? nameInput.value : 'Anonymous';
});