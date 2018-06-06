const addMatchLineUp = () => {
    fetch( 'match-lineup.json' )
    .then( response => response.json() )
    .then( parsedJSON => {
        const lineUpPlayers = parsedJSON;
    
        const title = document.getElementById('title');
        title.innerHTML = `<h1>${lineUpPlayers.team}</h1>`;

        const formation = document.getElementById('formation');
       
        lineUpPlayers.players.forEach(element => {
        const player = document.createElement('figure');
        player.classList.add('player');
        player.classList.add(`player-number-${element.formation_place}`);
        player.innerHTML = `    
                                <img src="./player-shirt.png" alt="player shirt icon"/>
                                <section class="name-container">
                                    <h2>${element.name}</h2>
                                </section>
                                <p>${element.type}</p>
                                <p>${element.position}</p>
                                <p>${element.formation_place}</p>
                            `
        formation.appendChild(player);
        });
    })
}

addMatchLineUp();


