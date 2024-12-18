import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call controller func
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.post('/create-student', StudentController.createStudent);
router.delete('/:studentId', StudentController.deleteStudent);

export const StudentRoute = router;
