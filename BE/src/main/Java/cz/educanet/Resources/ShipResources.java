package cz.educanet.Resources;

import cz.educanet.Manager.ShipManager;

import javax.inject.Inject;
import javax.websocket.server.PathParam;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("Hamburg")
@Produces(MediaType.APPLICATION_JSON)

public class ShipResources {

    @Inject
    private ShipManager Hamburg;

    @GET
    @Path("get-all")
    public Response getAll() {
        return Response.ok(Hamburg.getships()).build();
    }

    @GET
    @Path("get-specific")
    public Response getSpecific(@QueryParam("id") int id) {
        return Response.ok(Hamburg.getSpecificship(id-1)).build();
    }

    @POST
    @Path("create")
    public Response create(Ship ship) {
        Hamburg.putship(ship);
        return Response.ok(ship).build();
    }

    @DELETE
    @Path("scrap")
    public Response scrap(@QueryParam("id") int removeid) {
        Hamburg.Scrap(removeid-1);
        return Response.ok().build();
    }
}
