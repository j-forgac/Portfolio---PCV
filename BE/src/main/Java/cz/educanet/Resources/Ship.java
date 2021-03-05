package cz.educanet.Resources;

public class Ship {

    private int id;
    private int vytlak;
    private int posadka;
    private String name;
    private String trida;
    private String kategorie; //Frigate, Corvete, Destroyer, ...

    public int getId() {
        return id;
    }


    public int getVytlak() {
        return vytlak;
    }


    public int getPosadka() {
        return posadka;
    }


    public String getName() {
        return name;
    }


    public String getTrida() {
        return trida;
    }


    public String getKategorie() {
        return kategorie;
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setVytlak(int vytlak) {
        this.vytlak = vytlak;
    }

    public void setPosadka(int posadka) {
        this.posadka = posadka;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTrida(String trida) {
        this.trida = trida;
    }

    public void setKategorie(String kategorie) {
        this.kategorie = kategorie;
    }


}
