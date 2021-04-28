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

$perso1 = new Humain("Milo","Guerrier",10,100,true,2);
$perso2 = new Humain("Tya","Archère",5,50,true,3);
$perso3 = new Humain("Lili","Archère",5,55,false,2);
$perso4 = new Humain("Gael","Voleur",2,10,false,1);
echo $perso1;
echo "**************** <br />";
echo $perso2;
echo "**************** <br />";
echo $perso3;
echo "**************** <br />";
echo $perso4;
echo "**************** <br />";

$perso1->modifStats(10,30);

?>