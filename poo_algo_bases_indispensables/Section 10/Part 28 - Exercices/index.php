<?php 
class Personnage{
    private $nom;
    private $classe;
    private $attaque;
    private $pv;
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

$perso1 = new Personnage("Milo","Guerrier",10,100,true);
$perso2 = new Personnage("Tya","Archère",5,50,true);
$perso3 = new Personnage("Lili","Archère",5,55,false);
$perso4 = new Personnage("Gael","Voleur",2,10,false);
echo $perso1;
echo "**************** <br />";
echo $perso2;
echo "**************** <br />";
echo $perso3;
echo "**************** <br />";
echo $perso4;
echo "**************** <br />";

?>