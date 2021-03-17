import React from 'react';

import Arme from './Arme/Arme';

import Arc from '../../../asset/images/armes/arc.png';
import Epee from '../../../asset/images/armes/epee.png';
import Fleau from '../../../asset/images/armes/fleau.png';
import Hache from '../../../asset/images/armes/hache.png';


const armes = (props) => (
    <div className="row no-gutters text-center">
		{
            props.listeArmes.map((arme, index) => {
                let imageArme = '';

                switch (arme) {
                    case 'arc':
                        imageArme = Arc;
                        break;
                    case 'epee':
                        imageArme = Epee;
                        break;
                    case 'fleau':
                        imageArme = Fleau;
                        break;
                    case 'hache':
                        imageArme = Hache;
                        break;
                    default:
                        break;
                }
				return (
					<div key={index} className="col">
                        <Arme imageArme={imageArme} >
							{arme}
						</Arme>
					</div>
				);
			})
		}
	</div>
);

export default armes;
