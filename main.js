function creategame (player1, hour, player2) {
  return `
  <li> 
      <img src="./assests/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong> ${hour} </strong>
      <img src="./assests/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
  
`
}

let delay = -0.1;
function createcard(date, day, games) {
  delay = delay + 0.1;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
  </div>
`
}
document.querySelector('#cards').innerHTML = 
    createcard("20/11", "Domingo", creategame('qatar', '13:00', 'ecuador'))+
    
    createcard("21/11", "Segunda", creategame('england', '10:00', 'iran') + creategame('senegal', '13:00', 'netherland') + creategame('eua', '16:00', 'gales')) +

    createcard("22/11", "Terça", creategame('argentina', '07:00', 'saudiarabia') + creategame('denmark', '10:00', 'tunisia') + creategame('mexico', '13:00', 'poland') + creategame('france', '16:00', 'australia')) +
    
    createcard("23/11","Quarta", creategame('marocco', '07:00','croatia') + creategame('germany', '10:00', 'japan') + creategame('spain', '13:00', 'czechrepublic') + creategame('belgium', '16:00', 'canada')) +
    
    
    createcard("24/11","Quinta", creategame('switzerland', '07:00','cameroon') + creategame('uruguay', '10:00', 'southkorea') + creategame('portugal', '13:00', 'ghana') + creategame('brazil', '16:00', 'serbia'))  +

    createcard("25/11", "Sexta", creategame('gales', '07:00', 'iran') + creategame('qatar', '10:00', 'senegal') + creategame('netherland', '13:00', 'ecuador') + creategame('england', '16:00', 'eua')) +

    createcard("26/11", "Sabado", creategame('tunisia', '07:00', 'australia') + creategame('poland', '10:00', 'saudiarabia') + creategame('france', '13:00', 'denmark') + creategame('argentina', '16:00', 'mexico')) +

    createcard("27/11", "Domingo", creategame('japan', '07:00', 'czechrepublic') + creategame('belgium', '10:00', 'marocco') + creategame('croatia', '13:00', 'canada') + creategame('spain', '16:00', 'germany')) +

    createcard("28/11", "Segunda", creategame('cameroon', '07:00', 'serbia') + creategame('southkorea', '10:00', 'ghana') + creategame('brazil', '13:00', 'switzerland') + creategame('portugal', '16:00', 'uruguay')) +

    createcard("29/11", "terça", creategame('ecuador', '12:00', 'senegal') + creategame('netherland', '12:00', 'qatar') + creategame('iran', '16:00', 'eua') + creategame('gales', '16:00', 'england')) +

    createcard("30/11", "quarta", creategame('tunisia', '12:00', 'france') + creategame('australia', '12:00', 'denmark') + creategame('poland', '16:00', 'argentina') + creategame('czechrepublic', '16:00', 'mexico')) +
    
    createcard("01/12", "quinta", creategame('croatia', '12:00', 'belgium') + creategame('canada', '12:00', 'marocco') + creategame('japan', '16:00', 'spain') + creategame('czechrepublic', '16:00', 'germany')) +
    
    createcard("02/12", "sexta", creategame('southkorea', '12:00', 'portugal') + creategame('ghana', '12:00', 'uruguay') + creategame('serbia', '16:00', 'switzerland') + creategame('cameroon', '16:00', 'brazil'))  
  