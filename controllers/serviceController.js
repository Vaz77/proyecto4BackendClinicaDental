/*
const { Service } = require('../models/service')

const serviceController = {}

serviceController.createService =  async(req, res) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const duration = req.body.duration;
        const user_id = req.body.duration;

        //validaciones

        const newService = await Service.create(
            {
                name: name,
                price: price,
                is_active: isActive
            }
        )

        return res.json({
            success: true,
            message: "Create Service",
            data: newService
        })  
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Cant Create Service"
        })
    }
}

serviceController.getAllService = (req, res) => {
    return res.json({
        success: true,
        message: "Get All Service"
    })
}

serviceController.updateService = (req, res) => {
    return res.json({
        success: true,
        message: "Update Service: " + req.params.id
    })
}

serviceController.deleteService = (req, res) => {
    return res.json({
        success: true,
        message: "delete Service: " + req.params.id
    })
}

*/