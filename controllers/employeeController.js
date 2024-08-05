const Employee = require('../models/Employee')

const createEmployee = async(req, response) => {
    try {
        const {name, email, phone, city} = req.body
        
        const employee = new Employee({
            name,
            email,
            phone,
            city

        })
        await employee.save()
        response.status(201).json(employee)
    } catch(error) {
        console.log("There is an error: ", error)
        response.status(500).json({message: 'server error'})


    }
}

const getEmployees = async(req, res) => {

    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch(error) {
        console.error("There is error:", error)
        res.status(500).json({message:"Server Error"})
    }
}

const singleEmployee = async(req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if(!employee) {
            return res.status(404).json({message:" Employee Not Found"})
        }
        res.status(200).json(employee)
    } catch (error){
        console.error("This is an error",error)
        res.status(500).json({message:"Internal Server Error"})
    }

}

const updateEmployee = async(req, res) => {
    try {
        const {name, email, phone, city} = req.body
        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            {name, email, phone, city}
        )
        if(!myEmployee) {
            return res.status(404).json({message:"Employee Not Found"})

        }
       res.status(200).json(myEmployee)

    }catch(error) {
        console.error("This is an error",error)
        res.status(500).json({message:"Internal Server Error"})

    }

}

const deleteEmployee = async(req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(
            req.params.id)
       res.status(204).json(deleteEmployee)

    }catch(error) {
        console.error("This is an error",error)
        res.status(500).json({message:"Internal Server Error"})

    }

}


module.exports = {createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee}