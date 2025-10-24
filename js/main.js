const button = document.getElementById('show-tips-btn');
const tips = document.getElementById('tips');

button.addEventListener('click', function() {
  if (tips.classList.contains('hidden')) {
    tips.classList.remove('hidden');
    button.textContent = 'Ocultar consejos';
  } else {
    tips.classList.add('hidden');
    button.innerHTML = '<i class="fas fa-heart"></i> Mostrar consejos';
  }
});