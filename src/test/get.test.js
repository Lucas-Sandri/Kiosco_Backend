import app from '../../app.js'
import request from 'supertest'


describe('GetAll', () => {

    it('GET / - debería devolver un estado 200 y un mensaje', async () => {
        const response = await request(app).get('/').send();
    
        // Verificar el código de estado
        expect(response.statusCode).toBe(200);
    
        // Verificar que el cuerpo de la respuesta es un objeto y contiene el mensaje esperado
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('mensaje', 'acá no hay nada');
    });

    test('GET /productos - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/productos').send();
    
        // Verifica que el cuerpo de la respuesta sea un array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Opcional: Verifica que cada elemento del array sea un objeto
        if (response.body.length > 0) {
            response.body.forEach(item => {
                expect(item).toBeInstanceOf(Object);
            });
        }
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /clientes - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/clientes').send();
    
        // Verifica que el cuerpo de la respuesta sea un array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Opcional: Verifica que cada elemento del array sea un objeto
        if (response.body.length > 0) {
            response.body.forEach(item => {
                expect(item).toBeInstanceOf(Object);
            });
        }
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /categorias - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/categorias').send();
    
        // Verifica que el cuerpo de la respuesta sea un array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Opcional: Verifica que cada elemento del array sea un objeto
        if (response.body.length > 0) {
            response.body.forEach(item => {
                expect(item).toBeInstanceOf(Object);
            });
        }
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /ventas - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/ventas').send();
    
        // Verifica que el cuerpo de la respuesta sea un array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Opcional: Verifica que cada elemento del array sea un objeto
        if (response.body.length > 0) {
            response.body.forEach(item => {
                expect(item).toBeInstanceOf(Object);
            });
        }
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /detalle-ventas - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/detalle-ventas').send();
    
        // Verifica que el cuerpo de la respuesta sea un array
        expect(Array.isArray(response.body)).toBe(true);
    
        // Opcional: Verifica que cada elemento del array sea un objeto
        if (response.body.length > 0) {
            response.body.forEach(item => {
                expect(item).toBeInstanceOf(Object);
            });
        }
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });
});

describe('GetAllByID', () => {


    test('GET /productos - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/productos/1').send();
    
        // Verifica que el cuerpo de la respuesta sea un objeto
        expect(response.body).toBeInstanceOf(Object);
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /clientes - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/clientes/1').send();
    
        // Verifica que el cuerpo de la respuesta sea un objeto
        expect(response.body).toBeInstanceOf(Object);
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    
    });

    test('GET /categorias - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/categorias/1').send();
    
        // Verifica que el cuerpo de la respuesta sea un objeto
        expect(response.body).toBeInstanceOf(Object);
    
        // Opcional: Verifica el estado HTTP de la respuesta
        expect(response.status).toBe(200);
    });

    test('GET /ventas - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/ventas/1').send();
    
          // Verifica que el cuerpo de la respuesta sea un objeto
          expect(response.body).toBeInstanceOf(Object);
    
          // Opcional: Verifica el estado HTTP de la respuesta
          expect(response.status).toBe(200);
    });

    test('GET /detalle-ventas - debería devolver un array de objetos', async () => {
        const response = await request(app).get('/detalle-ventas/1').send();
    
          // Verifica que el cuerpo de la respuesta sea un objeto
          expect(response.body).toBeInstanceOf(Object);
    
          // Opcional: Verifica el estado HTTP de la respuesta
          expect(response.status).toBe(200);
    });
});


/*
afterAll(async () => {
    await db.end(); // Cerrar conexión con la base de datos si usas MySQL o similar
});
*/