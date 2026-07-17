document.getElementById('generate').addEventListener('click', () =>{
const num = parseInt(document.getElementById('numberInput').value);
const limit = parseInt(document.getElementById('limitInput').value);
const result = document.getElementById('result');

result.innerHTML = '';

if(isNaN(num) || isNaN(limit)) {
  result.innerHTML = '<p style="color:red;">Please! enter valid numbers</p> ';
  return;
}

let html = '<table>';
for(let i = 1; i <= limit; i++){
  html +=`
  <tr>
  <td>${num} x ${i}</td>
  <td>=</td>
  <td>${num * i}</td>
  </tr>
`;
}

html += '</table>';

result.innerHTML = html;
});
