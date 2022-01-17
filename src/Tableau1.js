class Tableau1 extends Phaser.Scene{
    preload(){
        this.load.image("cercle","assets/cercle.png")
        this.load.image("carre","assets/carre.png")
    }
    create() {
        this.width = 1000;
        this.height = 500;
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



    }

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
        }

    }
}