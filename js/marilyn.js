function addMatchLineUp() {
    fetch( 'match-lineup.json' )
    .then( response => response.json() )
    .then( parsedJSON => {
        const lineUpPlayers = parsedJSON;
    
        const title = document.getElementById('title');
        title.innerHTML = `<h1>${lineUpPlayers.team}</h1>`;
        console.log(title);

        const formation = document.getElementById('formation');
       
        lineUpPlayers.players.forEach(element => {
        const player = document.createElement('div');
        player.classList.add('player');
        player.innerHTML = `    
                                    <img src="./player-shirt.png" alt="player shirt icon"/>
                                    <h2>${element.name}</h2>
                                    <p>${element.type}</p>
                                    <p>${element.position}</p>
                         
                            `
        formation.appendChild(player);
        });
    })
    .then(parsedJSON => {

    }
       
    )
}

addMatchLineUp();


