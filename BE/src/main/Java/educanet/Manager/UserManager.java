package educanet.Manager;

import educanet.Resources.User;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;


@ApplicationScoped


public class UserManager {

    ArrayList<User> Users = new ArrayList<User>();

    public void putuser(User User) {
        User.setId(Users.size() + 1);
        Users.add(User);
    }

    public ArrayList<User> getUsers() {
        return Users;
    }

    public User getspecificuser(int id) {

        return(Users.get(id));
    }

    public void delete(int removeid) {
        Users.remove(removeid - 1);
    }
}
