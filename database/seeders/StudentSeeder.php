<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $student = new student;
        $student-> name = 'Lalo';
        $student-> firstName = 'Gómez';
        $student-> lastName = 'Cruz';
        $student-> email = 'lalo19@tec.mx';
        $student-> sex = 'Masculino';
        $student-> curp = 'GOCJ950619HASMRN01';
        $student-> address = 'Fidel Velazquez';
        $student-> tel = '4498971640';
        $student-> save ();
    }
}
