<?php

class Voiture{
    private $marque;
    private $modele;
    private $couleur;
    private $nbPortes;
    private $estElectrique;
    private $prixTTC;

    const MINI = 3;
    const NORMAL = 5;
    const TVA = 20;

    public function __construct($marque,$modele,$couleur, $nbPortes, $prixHT){
        $this->marque = $marque;
        $this->modele = $modele;
        $this->couleur = $couleur;
        $this->nbPortes = $nbPortes;
        $this->estElectrique = false;
        $this->prixTTC = $prixHT + $prixHT * self::TVA /100;
    }

    public function __toString(){
        $txt = "";
        $txt .= "Marque : " .$this->marque. "<br />";
        $txt .= "Modele : " .$this->modele. "<br />";
        $txt .= "Couleur : " .$this->couleur. "<br />";
        $txt .= "NbPortes : " .$this->nbPortes. "<br />";
        $txt .= "Prix TTC : " .$this->prixTTC. "<br />";
        if($this->estElectrique){
            $txt .= "La voiture est electrique <br />";
        } else {
            $txt .= "La voiture n'est pas electrique <br />";
        }
        return $txt;
        
    }

    public function getMarque(){return $this->marque;}
    public function setMarque($marque){$this->marque=$marque;}

    public function getModele(){return $this->modele;}
    public function setModele($modele){$this->modele=$modele;}

    public function getCouleur(){return $this->couleur;}
    public function setCouleur($couleur){$this->couleur=$couleur;}

    public function getNbPortes(){return $this->nbPortes;}
    public function setNbPortes($nbPortes){$this->nbPortes=$nbPortes;}

    public function getEstElectrique(){return $this->estElectrique;}
    public function setEstElectrique($estElectrique){$this->estElectrique=$estElectrique;}

    public function getPrix(){return $this->prix;}
    public function setPrix($prix){$this->prix=$prix;}
}

$v1 = new Voiture("Yotota","Ryas","noir", Voiture::NORMAL,18000);
$v1->setEstElectrique(true);

$v2 = new Voiture("Yotota","Risau","rouge",Voiture::MINI, 15000);
$v2->setNbPortes(3);

$v3 = new Voiture("Troen","5C","rouge", Voiture::NORMAL, 19000);
$v3->setEstElectrique(true);

$tab = [$v1,$v2,$v3];

for($i = 0; $i < count($tab); $i++){
    echo $tab[$i];
    echo "************* <br />";
}

afficherVoitureMarque($tab, "Troen");

function afficherVoitureMarque($tab , $marque){
    echo "*********************** <br />";
    echo "Voici les voitures de la marque ". $marque . "<br />";
    for($i = 0; $i < count($tab); $i++){
        if($tab[$i]->getMarque() === $marque){
            echo $tab[$i];
        }
    }
}

?>