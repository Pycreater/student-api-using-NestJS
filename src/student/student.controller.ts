import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './interface/student.interface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getAllStudents(): Promise<Student[]> {
        return this.studentService.findAll();
    }

    @Get(':id')
    getOneStudent(@Param('id') id: string): Promise<Student> {
        return this.studentService.findOne(id);
    }

    @Post()
    createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
        return this.studentService.create(createStudentDto);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string): Promise<Student> {
        return this.studentService.delete(id);
    }

    @Put(':id')
    updateStudent(@Body() updateStudentDto: CreateStudentDto, @Param('id') id: string): Promise<Student> {
        return this.studentService.update(id, updateStudentDto);
    }
}
