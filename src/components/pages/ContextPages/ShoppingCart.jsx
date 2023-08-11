import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";
import { useTheme } from "../../context/ThemeContext";
import Card from "../../UI/Card";
import { useCart } from "../../context/CartContext";
import Button from "../../UI/Button";

function ShoppingCart({ stacks, title }) {
  const { cardDark } = useTheme;
  const { cart, selectedCart, dispatch } = useCart();
  function handleDec(id) {
    dispatch({ type: "cart/decreaseQuantity", payload: id });
  }
  function handleInc(id) {
    dispatch({ type: "cart/addQuantity", payload: id });
  }

  return (
    <>
      <ContentHeader title={title} stacks={stacks} />
      <Card className="flex flex-col md:flex-row gap-2">
        <Card className="left items w-full md:w-1/2">items</Card>
        <Card className="text-xs right cart w-full md:w-1/2 flex flex-col gap-2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                className="border border-gray-200 px-3 py-2 items-center flex justify-around space-x-2"
                key={item.id}
              >
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Button onClick={() => handleDec(item.id)}>-</Button>
                  <p>{item.quantity}</p>
                  <Button onClick={() => handleInc(item.id)}>+</Button>
                </div>
                <p className="text-red-700">{item.totalPrice}</p>
              </div>
            ))
          ) : (
            <p className="text-red-800">🛒 Your cart is empty..</p>
          )}
        </Card>
      </Card>
      <ContentFooter />
    </>
  );
}

export default ShoppingCart;
