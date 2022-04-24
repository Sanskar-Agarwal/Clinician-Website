const {Patient} = require('../models/patient')
const {Measurement} = require('../models/patient')
const {CurrentMeasurement} = require('../models/patient')

const m = new Measurement({
    type: "BCG",
    value: 404,
    comment: "today i recorded 404 error ",
  });

const getAllPeopleData = async (req, res, next) => {
    try {
        const patients = await Patient.find().lean()
        return res.render('allData', { data: patients })
    } catch (err) {
        return next(err)
    }
}
const getDataById = async(req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.patient_id).lean()
        const measurement = await Measurement.findOne({patientId: "6264bb53a06831441fe0b973"}).lean()
        console.log(req.params.patient_id)
        console.log(measurement)
        if (!patient) {
            // no author found in database
            return res.sendStatus(404)
        }
        // found person
        return res.render('oneData', { oneItem: measurement })
        // return res.send(measurement)
    } catch (err) {
        return next(err)
    }
}

const getBloodGlucoseMeasurement = async(req,res,next) => {

    //find pat
    let thisUser = await Patient.findOne( {first_name: 'John'})

    //find BCG reading
    let BCGMeasurement = await Measurement.findOne({type: req.params.type})
    // BCGReading = new CurrentMeasurement({measurementId: BCGMeasurement._id})
    // thisUser.measurements = thisUser.measurements || [];
    thisUser.measurements.push(BCGMeasurement)

    await thisUser.save()
    result = await Patient.findOne( {nameGiven: 'John'})
    res.send(result)
}

const getNewPatientForm = async (req, res, next) => {
    try {
        return res.render('newPatient')
    } catch (err) {
        return next(err)
    }
}

const insertData = async (req, res, next) => {
    try {
        const newPatient = new Patient({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            join_date: req.body.join_date,
            recordBCG: req.body.recordBCG,
            recordWeight: req.body.recordWeight,
            recordInsulin: req.body.recordInsulin,
            recordExercise: req.body.recordExercise,
            // measurement:{
            //     type: "BCG",
            //     value: 404,
            //     comment: "today i recorded 404 error ",
            //   },
        })
        await newPatient.save();
        return res.redirect('/clinician')
    }catch (err) {
        return next(err)
    }
}


module.exports = {
    getAllPeopleData,
    getDataById,
    insertData,
    getBloodGlucoseMeasurement,
    getNewPatientForm
}