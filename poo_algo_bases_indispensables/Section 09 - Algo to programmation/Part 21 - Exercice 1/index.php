<?php

class Personnage {
	private $nom;
	private $classe;
	private $attack;
	private $pv;
	private $forceDuBien;

	public function __construct($nom, $classe, $attack, $pv, $forceDuBien) {
		$this->nom = $nom;
		$this->classe = $classe;
		$this->attack = $attack;
		$this->pv = $pv;
		$this->forceDuBien = $forceDuBien;
	}

	private function calculDegat() {
		return $this->pv / 100 * $this->attack + 1;
	}

	public function afficherDegat() {
		echo "D&eacute;g&acirc;ts inflig&eacute;s : " . $this->calculDegat();
	}

	public function toString() {
		echo "<hr />";
		echo "Name : " . $this->nom . "<br />";
		echo "Classe : " . $this->classe . "<br />";
		echo "Attack : " . $this->attack . "<br />";
		echo "PV : " . $this->pv . "<br />";
		echo "Force du Bien ? " . ($this->forceDuBien ? "OUI" : "NON") . "<br />";
		echo "<hr />";
	}
}

$perso = new Personnage("Tya", "Rogue", 25, 720, true);

$perso->toString();
$perso->afficherDegat();

?>