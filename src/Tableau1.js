/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    preload (){
        this.load.image('carré', 'assets/carre.png');
        this.load.image('cercle', 'assets/cercle.png');
        this.load.image ('gauche', 'assets/carre.png');
        this.load.image('droite','assets/carre.png');
    }
    create(){
        this.hauteur = 500
        this.largeur = 1000

        this.haut = this.physics.add.image(0,0,'gauche').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.setDisplaySize(this.hauteur,20);
        this.haut.body.setAllowGravity(false);



        this.haut = this.physics.add.image(0,0,'carré').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true)

        this.bas = this.physics.add.image(0,this.hauteur-20,'carré').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true)

        this.balle = this.physics.add.image(this.largeur/2, 10,'cercle').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1)
        this.balle.setVelocityX(Phaser.Math.Between(200,-200))
        this.balle.setVelocityY(Phaser.Math.Between(200,-200))
        this.balle.setVelocityX(500)


        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);

    }
    update(){

        if(this.balle.x >  this.largeur){
            this.balle.x =0
        }
        if(this.y > this.hauteur){
            this.balle.y = 0
        }

    }
}