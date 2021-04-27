<?php
class Personnage{
    private $nom;
    private $age;
    private $sexe;

    public function __construct($nom,$age,$sexe){
        $this->nom = $nom;
        $this->age = $age;
        $this->sexe = $sexe;
    }

    public function getNom(){return $this->nom;}
    public function setNom($nom){$this->nom = $nom;}

    public function getAge(){return $this->age;}
    public function setAge($age){$this->age = $age;}

    public function getSexe(){return $this->sexe;}
    public function setSexe($sexe){$this->sexe = $sexe;}

    public function ditBonjour(){
        echo "Bonjour, c'est moi ". $this->nom;
    }

    public function __toString()
    {
        $txt = "";
        $txt .= "Bonjour, c'est moi " . $this->nom. "<br />";
        $txt .= "Mon age est de :  " . $this->age. "<br />";
        $txt .= ($this->sexe) ? "Je suis un homme" : "Je suis une femme";
        return $txt;
    }
}

$perso1 = new Personnage("Tya",22,false);
echo $perso1;
// echo $perso1->ditBonjour(). "<br />";
// $perso1->setNom("Titi");
// echo $perso1->ditBonjour();

?>