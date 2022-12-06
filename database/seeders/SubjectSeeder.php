<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subject = new subject;
        $subject-> name = 'Topicos Avanzados Para Desarrollo Web';
        $subject-> credit = '5';
        $subject-> idSemester = '1';
        $subject-> save ();
    }
}
