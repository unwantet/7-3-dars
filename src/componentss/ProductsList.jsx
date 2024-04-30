import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  Remove,
} from "../features/products/ProducrsSlice";

function ProductsList() {
  const { products } = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="">
        {products.map((pro) => {
          return (
            <li
              className=" mb-5 bg-neutral rounded-2xl  flex justify-between rounded items-center pr-4"
              key={pro.id}
            >
              <img
                src={pro.thumbnail}
                alt=""
                className="w-56 h-56 object-cover rounded"
              />
              <div className="title  flex flex-col justify-center items-center gap-3  ">
                <h2 className="text-lg text-white">{pro.title}</h2>
                <p className="text-white">{pro.price}$</p>
                <button
                  onClick={() => dispatch(Remove(pro.id))}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
              <div
                className="box flex gap-5 items-center
              justify-center"
              >
                <button
                  onClick={() => dispatch(increaseAmount(pro.id))}
                  className="btn btn-outline btn-secondary"
                >
                  +
                </button>
                <p className="text-pink-600 text-xl">{pro.amount}</p>
                <button
                  onClick={() => {
                    if (pro.amount == 1) {
                      dispatch(Remove(pro.id));
                    } else {
                      dispatch(decreaseAmount(pro.id));
                    }
                  }}
                  className="btn btn-outline btn-secondary"
                >
                  -
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ProductsList;
