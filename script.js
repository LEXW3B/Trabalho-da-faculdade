onload = () => {
  const name = prompt('Digite seu nome: ')
  const nameValue = document.getElementById('name').innerHTML = `Seja bem vindo(a), ${name}`;
  (name !== null) /  nameValue;  
};

const click = document.getElementById('checkbox');
click.addEventListener('change', () => {
  document.body.classList.toggle('dark') / document.body.classList.toggle('nav-header'); 
});
