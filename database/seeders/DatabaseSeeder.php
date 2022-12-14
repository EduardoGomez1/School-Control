<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(SchoolSeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(SemesterSeeder::class);
        $this->call(SubjectSeeder::class);
        $this->call(GroupSeeder::class);
        $this->call(StudentSeeder::class);
        $this->call(ProfessorSeeder::class);
    }
}
