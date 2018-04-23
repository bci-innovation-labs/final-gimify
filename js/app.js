var model = {
		
		currentGame : null,
		ourGames : [
			{
				
				companyName : 'Big Viking Games',
				gamesName : 'Yo World',
				logoImg : '',
			},
			{
				
				companyName : 'Big Viking Games',
				gamesName : 'Fish World',
				logoImg : '',
			},
			{
				companyName : 'Big Viking Games',
				gamesName : 'Calatron',
				logoImg : '',
			},
			{
				companyName : 'Big Viking Games',
				gamesName : 'Tiny Tappers'
				// logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'My Singing Monster Series',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Jungle Guardians',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Wrecking Squard',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Jammer Splash',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Zombie Bloxx',	
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Short Fused',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Short Fused',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Home Arcade',
				logoImg : '',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Pixel Dogers'
				// logoImg : '',
			},
			{
				companyName: 'Digita Lextremes',
				gamesName : 'Warframe'
				// logoImg : '',
			},
			{
				companyName: 'Tactie Studio',
				gamesName : 'Immortal Empire'
				// logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Dash Quest Heros',
				// logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Dash Quest ',
				logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Tiny Rails',
				logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Tap Smiths',
				logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Happy Cube',
				logoImg : '',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Starship Turrent Operator Guy',
				logoImg : '',
			}

		],
};

var octopus = {
	init: function(){
		model.currentGame = model.ourGames[0];
		Views.init();
		listViews.init();		
	},
	getCurrentGame : function(){
		return model.currentGame;
	},

	getGame : function(){
		return model.ourGames;
	},

	setCurrentGame : function(game){
		model.currentGame = game;
	},

}

var Views = {

	init : function(){
		this.companyElem = document.getElementsByClassName('company');
		this.gameElem = document.getElementsByClassName('game');
		this.gameImg = document.getElementsByClassName('gamelogo');

		this.render();
	},

	render : function(){
		
		var currentGame = octopus.getCurrentGame();
		this.companyElem = currentGame.companyName;
		this.gameElem = currentGame.gamesName;
		this.gameImg = currentGame.logoImg;
	},
};

var listViews = {
	init :function(){
		this.listElem = document.getElementsByClassName('game-list');

		this.render();
	},

	render : function () {
		var game, elem , i, paragraph1, paragraph2;
		var games = octopus.getGame();
		this.listElem = document.getElementsByClassName('game-list');


		for (i = 0; i < games.length; i++) {
            game = games[i];

            elem = document.createElement('li');
            paragraph1 = document.createElement('p');
            paragraph2 = document.createElement('p');
            paragraph1.textContent = game.companyName;
            paragraph2.textContent = game.gamesName;
            elem.className = "this-game"
            elem.appendChild(paragraph1);
            elem.appendChild(paragraph2);
         this.listElem[0].appendChild(elem);
        }
	}
};

octopus.init();


