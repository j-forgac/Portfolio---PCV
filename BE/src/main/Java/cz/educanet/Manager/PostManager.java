package cz.educanet.Manager;

import cz.educanet.Resources.ship;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;


@ApplicationScoped


public class ShipManager {

    ArrayList<ship> postArray = new ArrayList<ship>();
    
    public void putship(ship ship) {
        ship.setId(postArray.size() + 1);
        postArray.add(ship);
    }

    public ArrayList<ship> getships() {
        return postArray;
    }

    public ship getSpecificship(int id) {

        return(postArray.get(id));
    }

    public void Scrap(int removeid) {
        postArray.remove(removeid - 1);
    }
}
