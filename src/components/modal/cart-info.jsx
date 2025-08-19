import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const CartInfo = ({ cart, close }) => {
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  const isShippingFree = subTotal >= 100;
  const shipping = isShippingFree || subTotal === 0 ? 0 : 20;
  const total = subTotal + shipping;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createOrder());
    toast.success("Ürünler hazırlanıyor..");
    close();
  };

  return (
    <div className="py-6 px-5 text-lg space-y-5">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Ara Toplam</span>
        <span data-testid="subtotal" className="font-semibold text-gray-700">
          {subTotal}₺
        </span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Kargo</span>
        <span data-testid="shipping" className="font-semibold text-gray-700">
          {isShippingFree ? "Ücretsiz" : `${shipping}₺`}
        </span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Toplam</span>
        <span
          data-testid="total"
          className="font-semibold text-gray-700 text-2xl"
        >
          {total}₺
        </span>
      </p>

      <button
        data-testid="order-button"
        disabled={subTotal === 0}
        onClick={handleClick}
        className="bg-red-500 mt-6 w-full py-3 rounded-md text-white font-medium hover:bg-red-600 transition"
      >
        Sipariş Ver
      </button>
    </div>
  );
};

export default CartInfo;
