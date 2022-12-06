<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $school = new school;
        $school-> name = 'ITA';
        $school-> clave = '01AGS3535-C';
        $school-> address = 'Lopez Mateos 1022';
        $school-> email = 'ita.ags@tecnm.mx';
        $school-> tel = '4499704540';
        $school-> save ();
    }
}
