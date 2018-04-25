
var model = {
		
		currentGame : null,
		ourGames : [
			{
				
				companyName : 'Big Viking Games',
				gamesName : 'Yo World',
				logoImg : 'img/YW_Banner_1200x627_3a (1).png',
			},
			{
				
				companyName : 'Big Viking Games',
				gamesName : 'Fish World',
				logoImg : 'img/Fish_World_Poster-1200x627.jpg',
			},
			{
				companyName : 'Big Viking Games',
				gamesName : 'Calatron',
				logoImg : 'img/facebook_horizontal_banner001.png',
			},
			{
				companyName : 'Big Viking Games',
				gamesName : 'Tiny Tappers' ,
				logoImg : 'img/tiny.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'My Singing Monster Series',
				logoImg : 'img/MSMFranchise.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Jungle Guardians',
				logoImg : 'img/Games_JungleGuardiansFeatureImage-1.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Wrecking Squard',
				logoImg : 'img/Games_WreckingSquad_FeatureBox.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Jammer Splash',
				logoImg : 'img/JS.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Zombie Bloxx',	
				logoImg : 'img/Games_ZombieBloxx.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Short Fused',
				logoImg : 'img/Games_ShortFused_FeatureBox.jpg',
			},
			
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Home Arcade',
				logoImg : 'img/HomeArcade.jpg',
			},
			{
				companyName : 'Big Blue Bubble',
				gamesName :'Pixel Dogers',
				logoImg : 'img/PixelDodgers.jpg',
			},
			{
				companyName: 'Digita Lextremes',
				gamesName : 'Warframe',
				 logoImg : 'img/ghoulpurge_de_website (1).jpg',
			},
			{
				companyName: 'Tactie Studio',
				gamesName : 'Immortal Empire',
				 logoImg : 'img/ie_splash.jpg',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Dash Quest Heros',
				logoImg : 'img/DQH_300x300.png',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Dash Quest ',
				logoImg : 'img/DQ_300x300.png',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Tiny Rails',
				logoImg : 'img/TR_300x300.png',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Tap Smiths',
				logoImg : 'img/TS_300x300.png',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Happy Cube',
				logoImg : 'img/HC_300x300.png',
			},
			{
				companyName: 'Tiny Titan Studios' ,
				gamesName : 'Starship Turrent Operator Guy',
				logoImg : 'img/STOG_300x300_Logo.png',
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
		// this.gameImg = document.getElementsByClassName('gamelogo');

		this.render();
	},

	render : function(){
		
		var currentGame = octopus.getCurrentGame();
		this.companyElem = currentGame.companyName;
		this.gameElem = currentGame.gamesName;
		// this.gameImg = currentGame.logoImg;
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
            box1 = document.createElement('div');
            box2 = document.createElement('div');
            box3 = document.createElement('div');
            img = document.createElement('img');
            paragraph1 = document.createElement('p');
            paragraph2 = document.createElement('p');
            paragraph1.textContent = game.companyName;
            paragraph2.textContent = game.gamesName;
            elem.className = "this-game"
            paragraph1.className = "paragraph1"
            paragraph2.className = "paragraph2"
            

            elem.appendChild(paragraph1);
            elem.appendChild(box1);
            box1.appendChild(box2);
            box2.appendChild(paragraph2);
            box1.appendChild(box3);
            
            box3.appendChild(img);
            img.src = game.logoImg
            box1.className = "box1"
            box2.className = "box2"
            box3.className = "box3"

            
         this.listElem[0].appendChild(elem);

        }
	}
};

octopus.init();


