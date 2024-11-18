import { Router } from "express";
import {
    createVenta,
    deleteVentaById,
    getAllVentas,
    getVentaById,
    updateVenta
} from "../controller/ventaController.js";
import { reqControlVenta, reqControlUpdateVenta } from "../middleware/reqCorreccionVenta.js";
import { esAdmin, tienePermiso } from "../middleware/comprobarRango.js";

const router = Router(); // Usa la función Router de Express para construir las rutas

router.get("/", getAllVentas);
router.get("/:id", getVentaById);
router.post("/crear", tienePermiso, reqControlVenta, createVenta);
router.put("/actualizar/:id", tienePermiso, reqControlUpdateVenta, updateVenta);
router.delete("/eliminar/:id", esAdmin, deleteVentaById);

// Middleware para rutas inexistentes
router.use((req, res, next) => {
    res.status(404).json({
        error: "La ruta que buscas no existe",
        method: req.method,
        path: req.originalUrl,
    });
});

export default router; // Es importado en app.js
