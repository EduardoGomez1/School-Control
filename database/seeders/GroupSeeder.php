<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Group;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $group = new group;
        $group-> name = 'Lalo';
        $group-> size = '20';
        $group-> idCar = '1';
        $group-> save ();
    }
}
