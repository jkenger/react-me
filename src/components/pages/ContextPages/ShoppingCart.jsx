import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";
import { useTheme } from "../../context/ThemeContext";
import Card from "../../UI/Card";
import { useCart } from "../../context/CartContext";
import Button from "../../UI/Button";

function ShoppingCart({ stacks, title }) {
  const { cardDark } = useTheme;
  const { cart, dispatch } = useCart();

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
        <Card className="right cart w-full md:w-1/2">
          {cart.length > 0 ? (
            <div className="border border-gray-200 px-3 py-2 items-center flex justify-between space-x-2">
              <p>{cart[0].name}</p>
              <p>{cart[0].price}</p>
              <div className="flex items-center justify-center space-x-2">
                <Button onClick={() => handleDec(cart[0].id)}>-</Button>
                <p>{cart[0].quantity}</p>
                <Button onClick={() => handleInc(cart[0].id)}>+</Button>
              </div>
            </div>
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
