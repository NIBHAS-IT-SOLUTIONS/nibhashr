var express=require('express');
var router=express.Router()

const servicecontrollers = require('../controllers/servicecontrollers');
const employercontrollers = require('../controllers/employercontrollers');
const jobcontrollers = require('../controllers/jobcontrollers');
const candidatecontrollers = require('../controllers/candidatecontrollers');
const applicationcontrollers = require('../controllers/applicationcontrollers');


router.post('/',servicecontrollers.service)


router.post('/register',employercontrollers.register)
router.post('/login',employercontrollers.login)
router.get('/getemployers',employercontrollers.getemployers)
router.get('/getuser/:id',employercontrollers.getemployerById)
    


router.post('/jobpost',jobcontrollers.postjob)
router.delete('/deletejobs',jobcontrollers.deletejob)
router.get('/getjobs',jobcontrollers.getjobs)
router.get('/getjobsbydate',jobcontrollers.getjobsbyDate)
router.get('/getjobsbylocation',jobcontrollers.getjobsBylocation)
router.get('/getjobsbyqual',jobcontrollers.getjobsbyqual)
router.get('/getlocations',jobcontrollers.getlocations)
router.get('/getqualifications',jobcontrollers.getqualifications)

 
router.post('/candidateregister',candidatecontrollers.candidateregister)
router.post('/candidatelogin',candidatecontrollers.candidatelogin) 
router.get('/getcandidate/:id',candidatecontrollers.getcandidatebyId)

router.post('/applyjobs',applicationcontrollers.applyjobs)
router.get('/appliedjobs',applicationcontrollers.appliedjobs)



module.exports = router; 