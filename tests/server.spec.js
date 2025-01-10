const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    test("GET /cafes devuelve un status code 200 y un arreglo con al menos un objeto", async () => {
        const response = await request(server).get("/cafes");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("DELETE /cafes/:id devuelve un status code 404 si el ID no existe", async () => {
        const nonExistentId = 9999; // ID que no existe en el arreglo
        const response = await request(server)
        .delete(`/cafes/${nonExistentId}`)
        .set("Authorization", "Bearer token_valido"); // Necesario para la autenticación en esta ruta

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("No se encontró ningún cafe con ese id");
    });

    test("POST /cafes agrega un nuevo café y devuelve un status code 201", async () => {
        const newCafe = {
        id: 5,
        nombre: "Latte",
        };

        const response = await request(server)
        .post("/cafes")
        .send(newCafe)
        .set("Authorization", "Bearer token_valido"); // Necesario para la autenticación en esta ruta

        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(newCafe)]));
    });

    test("PUT /cafes/:id devuelve un status code 400 si el id del parámetro no coincide con el id del payload", async () => {
        const cafeToUpdate = {
        id: 5, // El id del café en el payload
        nombre: "Café con leche",
        };

        const invalidId = 9999; // ID no coincide con el id en el payload

        const response = await request(server)
        .put(`/cafes/${invalidId}`)
        .send(cafeToUpdate)
        .set("Authorization", "Bearer token_valido"); // Necesario para la autenticación en esta ruta

        // Verifica que el código de estado sea 400
        expect(response.status).toBe(400);

        // Verifica que el mensaje de respuesta sea el esperado
        expect(response.body.message).toBe(
        "El id del parámetro no coincide con el id del café recibido"
        );
    });
    });




