import type { LinksFunction } from "remix";

import calcStylesUrl from '~/styles/calculator.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calcStylesUrl },
  ];
};



export default function Calculator() {
  return (
    <div className='main-container'>
        <h1 className='calc-header'>Calculator</h1>
        <div className='calc-container'>
            <div className='calc-shell'>
                <div className='calc-display'>
                    <div className='calc-display-text'>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
