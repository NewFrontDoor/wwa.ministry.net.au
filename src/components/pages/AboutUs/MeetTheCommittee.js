/*eslint-disable */
import React from 'react';
import Person from '../../models/Person';

import Rachel from '../../../assets/img/Bain,Rachel.png';
import Libby from '../../../assets/img/Dilger,Libby.png';
import Elya from '../../../assets/img/Richardson,Elya.png';
import Lyndal from '../../../assets/img/Jolly,Lyndal.png';
import Jane from '../../../assets/img/Maarseveen,Jane.png';
//import Naomi from '../../../assets/img/Petrie,Naomi.png';
import Blank from '../../../assets/img/Blank.png'


export default () => (
    <section className="container">
        <div className="section_header">
            <h3>Meet the Committee</h3>
        </div>

        <div className="text-center">
            <Person name="Rachel Bain" title="Coordinator" image={Rachel} />
            <Person name="Libby Dilger" title="Admin" image={Libby} />
            <Person name="Elya Richardson" title="Workshop & Media" image={Elya} />

            <Person name="Lyndal Jolly" title="Communications" image={Lyndal} />
            <Person name="Jane Maarseveen" title="Missions" image={Jane} />
            <Person name="Naomi Petrie" title="Activities" image={Blank} />


        </div>
    </section>
)