<<<<<<< HEAD

class Tableau1 extends Phaser.Scene{


    preload(){
        this.load.image('square','assets/carre.png');
        this.load.image('circle','assets/navi.png');
        this.load.image( 'link', 'assets/linkraquete.png');
        this.load.image('zelda', "assets/zeldaaa.png");
        this.load.image('fond','assets/image.bmp');

    }

    create(){

        this.add.image(500,145,'fond');

        this.hauteur = 500
        this.largeur = 1000
        this.speedX = 0
        while(this.speedX===0){
            this.speedX = 500*Phaser.Math.Between(-1,1)
        }
        this.speedY = Phaser.Math.Between(-500, 500)
        this.maxspeed = 500

        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'circle')
        this.balle.setDisplaySize(20, 20)
        this.balle.body.setBounce(1,1);
        this.balle.body.setAllowGravity(false)

        this.haut = this.physics.add.sprite(0, 0, 'square').setOrigin(0, 0)
        this.haut.setDisplaySize(this.largeur, 20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true);
        this.bas = this.physics.add.sprite(0, 480, 'square').setOrigin(0, 0)
        this.bas.setDisplaySize(this.largeur, 20)
        this.bas.body.setAllowGravity(false)
        this.bas.setImmovable(true);
        this.player1 = this.physics.add.sprite(50, 360, 'link')
        this.player1.setDisplaySize(40, 100)
        this.player1.body.setAllowGravity(false)
        this.player2 = this.physics.add.sprite(920, 360, 'zelda')
        this.player2.setDisplaySize(40, 100)
        this.player2.body.setAllowGravity(false)
        this.player1.setImmovable(true)
        this.player2.setImmovable(true)

        let me = this;
        this.physics.add.collider(this.player1, this.balle,function(){
            console.log('touche player 1')
            me.rebond(me.player1)
        })
        this.physics.add.collider(this.player2, this.balle,function(){
            console.log('touche player 2')
            me.rebond(me.player2)
        })
=======
class Tableau1 extends Phaser.Scene{
    preload(){
        this.load.image("cercle","assets/cercle.png")
        this.load.image("carre","assets/carre.png")
        this.load.image("fond", "assets/fond.jpg")

    }
    create() {
        this.width = 1000;
        this.height = 500;


        /**fond image
         *
         */
        this.fond = this.add.image(0,0,'fond').setOrigin(0,0)
        this.fond.setDisplaySize(this.width,20);
>>>>>>> origin/main

        this.physics.add.collider(this.balle, this.bas)
        this.physics.add.collider(this.balle, this.haut)

<<<<<<< HEAD
        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)

        this.physics.add.collider(this.haut, this.player1)
        this.physics.add.collider(this.bas, this.player1)

        this.physics.add.collider(this.haut, this.player2)
        this.physics.add.collider(this.bas, this.player2)
=======


        /**
         * Mur Haut
         * @type {Phaser.Physics.Arcade.Sprite & {body: Phaser.Physics.Arcade.Body}}
         */
        this.haut = this.physics.add.sprite(0, 0, 'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.width, 20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);
        /**
         * Mur Bas
         * @type {Phaser.Physics.Arcade.Sprite & {body: Phaser.Physics.Arcade.Body}}
         */
        this.bas = this.physics.add.sprite(0, this.height - 20, 'carre').setOrigin(0, 0);
        this.bas.setDisplaySize(this.width, 20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);
        /**
         * Raquette Gauche
         * @type {Phaser.Physics.Arcade.Sprite & {body: Phaser.Physics.Arcade.Body}}
         */
        this.gauche = this.physics.add.sprite(40, 200, 'carre').setOrigin(0, 0);
        this.gauche.setDisplaySize(20, 100);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);
        this.gauche.setVelocityY(0);
        /**
         * Raquette Droite
         * @type {Phaser.Physics.Arcade.Sprite & {body: Phaser.Physics.Arcade.Body}}
         */
        this.droite = this.physics.add.sprite(this.width - 40, 200, 'carre').setOrigin(0, 0);
        this.droite.setDisplaySize(20, 100);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);
        this.droite.setVelocityY(0);
        /**
         * Balle
         * @type {Phaser.Physics.Arcade.Sprite & {body: Phaser.Physics.Arcade.Body}}
         */
        this.balle = this.physics.add.sprite(this.width / 2, this.height / 2, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20, 20);
        this.balle.body.setBounce(1.1, 1.1);
        this.balle.setVelocityX(100);
        this.balle.setVelocityY(Phaser.Math.Between(0,0));
        this.balle.setMaxVelocity(500);
        /**
         * Physics
         */
        let me=this;

        this.physics.add.collider(this.balle, this.bas);
        this.physics.add.collider(this.balle, this.haut);

        this.physics.add.collider(this.balle, this.gauche);
        this.physics.add.collider(this.balle, this.droite, function(){
            console.log("touche droit")
            me.rebond(me.droite);
        });

        this.initKeyboard();
    }
    rebond(raquette){

        console.log(raquette.y);
        console.log(this.balle.y);
        console.log(this.balle.y-raquette.y);
>>>>>>> origin/main

        this.player1Speed = 0
        this.player2Speed = 0

<<<<<<< HEAD
        if(this.balle<0)
        {
            this.scoreplayer2 +=1;
            this.textplayer1.setText('Player 1 = ' + this.scoreplayer1);
=======
>>>>>>> origin/main

        }

        if(this.balle>this.largeur)
        {
            this.scoreplayer1  +=1;
            this.textplayer2.setText('Player 2 = ' + this.scoreplayer2);
        }


        this.joueurGauche = new Joueur('link','joueurGauche')
        this.joueurDroite = new Joueur('zelda','joueurDroite')
        console.log(this.joueurGauche)

        this.balleAucentre();
        this.initKeyboard()
    }
<<<<<<< HEAD

    rebond(players){
        let me = this ;
        console.log(this.player1.y);
        console.log(me.balle.y);
        let hauteurPlayers = players.displayHeight;

        let positionRelativePlayers = (this.balle.y - players.y);

        positionRelativePlayers= (positionRelativePlayers / hauteurPlayers)
        positionRelativePlayers = positionRelativePlayers*2-1;

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativePlayers * 50);

    }

    balleAucentre(){
        this.balle.x = this.largeur/2
        this.balle.y = this.hauteur/2
        this.speedX = 0

        this.balle.setVelocityX(Math.random()>0.5?-100:100)
        this.balle.setVelocityY(0)
    }

    /**
     *
     * @param {Joueur} joueur
     */
    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.balleAucentre();
    }

    update(){
        if(this.balle.x>this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.balle.x<0){
            this.win(this.joueurDroite);
=======

    initKeyboard() {
        let me=this;
        this.input.keyboard.on('keyup', function(kevent) {
            switch (kevent.keyCode) {
                // initialisation de la touche en appuis X pour descendre la raquette gauche
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0)
                    break;
                // initialisation de la touche en appuis S pour Monter la raquette gauche
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0)
                    break;
                // initialisation de la touche en appuis N pour descendre la raquette Droite
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(0)
                    break;
                // initialisation de la touche en appuis J pour Monter la raquette Droite
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(0)
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.J:
                    if(me.droite.y < me.haut.y+20){
                        me.droite.setVelocityY(0)
                    }
                    else{
                        me.droite.setVelocityY(-200)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    if(me.droite.y > me.bas.y-100){
                        me.droite.setVelocityY(0)
                    }else {
                        me.droite.setVelocityY(200)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    if(me.gauche.y < me.haut.y+20){
                        me.gauche.setVelocityY(0)
                    }
                    else{
                        me.gauche.setVelocityY(-200)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    if(me.gauche.y > me.bas.y-100){
                        me.gauche.setVelocityY(0)
                    }else {
                        me.gauche.setVelocityY(200)
                    }

                    break;
            }
        })
    }
    update(){
        if(this.balle.x > this.width) {
            this.balle.x=this.width/2
        }


        if(this.balle.y<0){
            this.balle.y=0
        }

        if(this.balle.y > this.height){
            this.balle.y = this.height
>>>>>>> origin/main
        }
        this.player1.y += this.player1Speed
        this.player2.y += this.player2Speed
    }

    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.player1Speed = -5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.player1Speed = 5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.player2Speed = -5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.player2Speed = 5
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.player1Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.player1Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.player2Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.player2Speed = 0
                    break;
            }
        });
    }
}




