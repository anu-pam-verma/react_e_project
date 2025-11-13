import Card,{ParmotedCard} from './Card';
import {getCards} from '../utils/GetResData'
import { Link } from "react-router-dom";

const CardPromoted = ParmotedCard(Card);
const product = getCards();
export default function Body() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <Link to={`details/${product.id}`} key={product.id}><div >
              {product.prometed  ? (<CardPromoted productlist={product}/>) :  (<Card productlist={product}/>)}                 
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
