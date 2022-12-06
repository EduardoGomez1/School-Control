<?php

namespace Database\Seeders;

use App\Models\Career;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $career = new career;
        $career-> name = 'ITICS';
        $career-> clave = 'TCF535-C';
        $career-> area = 'Ingenieria';
        $career-> idSchool = '1';
        $career-> save ();
    }
}
