package cz.educanet.Manager;

import cz.educanet.Resources.ship;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;


@ApplicationScoped


public class ShipManager {

    ArrayList<ship> dock = new ArrayList<ship>();
    
    public void putship(ship ship) {
        ship.setId(dock.size() + 1);
        dock.add(ship);
    }

    public ArrayList<ship> getships() {
        return dock;
    }

    public ship getSpecificship(int id) {

        return(dock.get(id));
    }

    public void Scrap(int removeid) {
        dock.remove(removeid - 1);
    }
}
