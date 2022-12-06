<?php

namespace Database\Seeders;

use App\Models\Semester;
use Illuminate\Database\Seeder;

class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $semester = new semester;
        $semester-> name = 'Segundo';
        $semester-> period = '01';
        $semester-> idCareer = '1';
        $semester-> save ();
    }
}
