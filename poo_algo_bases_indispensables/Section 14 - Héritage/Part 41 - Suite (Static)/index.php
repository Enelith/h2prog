<?php 
class Personnage{
    private $nom;
    private $classe;
    protected $attaque;
    protected $pv;
    private $forceDuBien;

    public function __construct($nom,$classe,$attaque,$pv,$forceDuBien)
    {
        $this->nom = $nom;
        $this->classe = $classe;
        $this->attaque = $attaque;
        $this->pv = $pv;
        $this->forceDuBien = $forceDuBien;
    }

    private function calculDegat(){
        return $this->pv / 100 * $this->attaque +1;
    }

    public function afficherDegat(){
        echo "Dégat infligés : ". $this->calculDegat(). " dégats <br />";
    }

    public function __toString()
    {
        $txt = "Mon nom est : " . $this->nom . "<br />";
        $txt .= "Ma classe est : " . $this->classe . "<br />";
        $txt .= "J'inflige : " . $this->attaque . "<br />";
        $txt .= "J'ai  : " . $this->pv . " pv <br />";
        $txt .= ($this->forceDuBien) ? "Je fais partie des forces du bien" : "Je fais partie des forces du mal";
        $txt .= "<br />";
        return $txt;
    }
}

class Humain extends Personnage{
    private $level;

    public function __construct($nom,$classe,$attaque,$pv,$forceDuBien,$level){
        parent::__construct($nom,$classe,$attaque,$pv,$forceDuBien);
        $this->level = $level;
    }

    public function __toString(){
        $txt ="";
        $txt .= parent::__toString();
        $txt .= "Level : ". $this->level . "<br />";
        return $txt;
    }

    public function gagneUnLevel(){
        $this->level++;
    }

    public function modifStats($attaque,$pv){
        $this->attaque = $attaque;
        $this->pv = $pv;
        $this->afficherDegat();
        echo "<br /> Mes PV sont de : ". $this->pv;
    }
}

class Zombie extends Personnage{
    private $vitesse;
    private const DEGATZOMBIE = 10;

    public static $zombies; //tableau de zombie

    public function __construct($nom,$classe,$pv,$forceDuBien,$vitesse){
        parent::__construct($nom,$classe,self::DEGATZOMBIE,$pv,$forceDuBien);
        $this->vitesse = $vitesse;

        self::$zombies[] = $this;
    }

    public function setVitesse($vitesse){
        $this->vitesse = $vitesse;
    }

    private function calculDegat(){
        return $this->attaque;
    }

    public function afficherDegat(){
        echo "Dégat infligés : ". $this->calculDegat(). " dégats <br />";
    }

    public function __toString(){
        $txt ="ZOMBIE en approche !!!! <br />";
        $txt .= parent::__toString();
        $txt .= "Vitesse : ".$this->vitesse."<br />";
        return $txt;
    }

    public static function afficherZombies(){
        echo "Voici les zombies !!! <br />";
        for($i=0; $i <= count(self::$zombies)-1 ; $i++){
            echo self::$zombies[$i];
        }
    }
}

$perso1 = new Humain("Milo","Guerrier",10,100,true,2);
$perso2 = new Humain("Tya","Archère",5,50,true,3);
$perso3 = new Humain("Lili","Archère",5,55,false,2);
$perso4 = new Humain("Gael","Voleur",2,10,false,1);

$zombie1 = new Zombie("z1","zombie",100,false,4);
$zombie2 = new Zombie("z2","zombie",100,false,4);
$zombie3 = new Zombie("z3","zombie",100,false,4);
$zombie4 = new Zombie("z4","zombie",100,false,4);
$zombie5 = new Zombie("z5","zombie",100,false,4);

Zombie::afficherZombies();


?>