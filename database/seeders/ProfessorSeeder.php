<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Professor;


class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $professor = new professor;
        $professor-> name = 'Daniel';
        $professor-> firstName = 'Ramirez';
        $professor-> lastName = 'Mendez';
        $professor-> email = 'daniel.ita@tecnm.mx';
        $professor-> sex = 'Masculino';
        $professor-> curp = 'MERAD871202HASMRN01';
        $professor-> address = 'HACIENDAS DE AGUASCALIENTES';
        $professor-> tel = '4492556310';
        $professor-> cedula = '808052634175';
        $professor-> academic_degree = 'Maestria';
        $professor-> specialty = 'Ciberseguridad';
        $professor-> save ();
    }
}
