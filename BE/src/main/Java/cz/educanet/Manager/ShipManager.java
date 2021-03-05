package cz.educanet.Manager;

import cz.educanet.Resources.Ship;


import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;


@ApplicationScoped


public class ShipManager {

    ArrayList<Ship> dock = new ArrayList<Ship>();
    
    public void putship(Ship ship) {
        ship.setId(dock.size() + 1);
        dock.add(ship);
    }

    public ArrayList<Ship> getships() {
        return dock;
    }

    public Ship getSpecificship(int id) {

        return(dock.get(id));
    }

    public void Scrap(int removeid) {
        dock.remove(removeid - 1);
    }
}
