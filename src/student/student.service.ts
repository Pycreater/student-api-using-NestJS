import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interface/student.interface';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}

    async findAll(): Promise<Student[]> {
        return await this.studentModel.find().exec();
    }

    async findOne(id: string): Promise<Student> {
        return await this.studentModel.findById(id).exec();
    }

    async create(student: Student): Promise<Student> {
        const newStudent = new this.studentModel(student);
        return await newStudent.save();
    }

    async delete(id: string): Promise<Student> {
        return await this.studentModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, student: Student): Promise<Student> {
        return await this.studentModel.findByIdAndUpdate(id, student, { new: true }).exec();
    }
}
