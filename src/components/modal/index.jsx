import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartItem from "./cart-item";
import CartInfo from "./cart-info";

const Modal = ({ isOpen, close }) => {
  const { cart } = useSelector((store) => store);

  if (!isOpen) return null;

  return (
    <div
      data-testid="modal"
      className="fixed inset-0 bg-black/30 grid place-items-center backdrop-blur z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-[90%] md:w-[600px] text-black rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[85vh]">
        {/* Header */}
        <div className="border-b px-5 py-3 flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-semibold">Sepet</h2>
          <button
            aria-label="Kapat"
            onClick={close}
            className="p-2 rounded hover:bg-black/5 active:scale-95 transition"
          >
            <IoClose size={22} />
          </button>
        </div>

        <div className="px-5 py-2 grow overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500 py-6 text-center">
              Henüz sepete ürün eklenmedi
            </p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <div className="shrink-0 border-t">
          <CartInfo cart={cart} close={close} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
